// Fonction Supabase « rappel » : envoie les notifications quotidiennes.
// Appelée toutes les 15 minutes par la tâche programmée (supabase-rappels.sql).
// Secrets à définir dans Supabase (Edge Functions › Secrets) :
//   VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT (ex. mailto:ton.adresse@exemple.fr)

import { createClient } from "npm:@supabase/supabase-js@2.45.4";
import webpush from "npm:web-push@3.6.7";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
webpush.setVapidDetails(
  Deno.env.get("VAPID_SUBJECT") ?? "mailto:contact@example.com",
  Deno.env.get("VAPID_PUBLIC_KEY")!,
  Deno.env.get("VAPID_PRIVATE_KEY")!,
);

const DERNIER_APPEL = 21 * 60 + 30; // 21 h 30 : « sauve ta série »
const FENETRE = 30; // minutes

function maintenant(fuseau: string) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("fr-FR", {
    timeZone: fuseau, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(new Date()).map((p) => [p.type, p.value]));
  return { date: `${parts.year}-${parts.month}-${parts.day}`, minutes: +parts.hour * 60 + +parts.minute };
}
function decaler(date: string, n: number) {
  const d = new Date(date + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
function serie(jours: Record<string, string[]>, depuis: string) {
  let n = 0, d = depuis;
  while ((jours[d] ?? []).length) { n++; d = decaler(d, -1); }
  return n;
}
const hasard = <T>(t: T[]) => t[Math.floor(Math.random() * t.length)];

function message(type: "rappel" | "serie", prenom: string, s: number, fait: number, objectif: number) {
  const p = prenom ? `${prenom}, ` : "";
  if (type === "serie") {
    return { title: `🔥 Ta série de ${s} jours est en danger !`, body: `${p}une seule activité avant minuit suffit pour la sauver. Summer compte sur toi 🐾` };
  }
  if (fait > 0) {
    return { title: "Presque ! 🎯", body: `${p}encore ${objectif - fait} activité${objectif - fait > 1 ? "s" : ""} pour atteindre ton objectif du jour.` };
  }
  return hasard([
    { title: "Summer t’attend 🐾", body: `${p}c’est l’heure de ton français ! Dix minutes, et la journée est réussie.` },
    { title: s > 1 ? `🔥 ${s} jours de suite !` : "Un peu de français ? ☕", body: s > 1 ? `${p}on continue ? Ta série ne demande qu’à grandir.` : `${p}une petite activité avec un thé, ça te dit ?` },
    { title: "Mot du jour : « savourer » 🍵", body: `${p}savoure dix minutes de français aujourd’hui !` },
    { title: "Petit rappel 📖", body: `${p}tes unités t’attendent. Une lecture, une écoute, et c’est gagné.` },
  ]);
}

Deno.serve(async () => {
  const { data: rappels, error } = await sb.from("rappels").select("*").eq("actif", true);
  if (error) return new Response(JSON.stringify({ erreur: error.message }), { status: 500 });

  let envoyes = 0;
  for (const r of rappels ?? []) {
    const { date, minutes } = maintenant(r.fuseau || "Europe/Paris");
    const [hh, mm] = String(r.heure || "19:00").split(":").map(Number);
    const cible = hh * 60 + mm;

    let type: "rappel" | "serie" | null = null;
    if (minutes >= cible && minutes < cible + FENETRE && r.dernier_rappel !== date) type = "rappel";
    else if (minutes >= DERNIER_APPEL && minutes < DERNIER_APPEL + FENETRE && r.dernier_serie !== date && cible < DERNIER_APPEL - 60) type = "serie";
    if (!type) continue;

    const { data: prog } = await sb.from("progression").select("prenom, donnees").eq("user_id", r.user_id).maybeSingle();
    const jours: Record<string, string[]> = prog?.donnees?.jours ?? {};
    const objectif = prog?.donnees?.reglages?.objectif ?? 2;
    const fait = (jours[date] ?? []).length;
    const s = serie(jours, decaler(date, -1));

    const champ = type === "rappel" ? "dernier_rappel" : "dernier_serie";
    if (fait >= objectif || (type === "serie" && (fait > 0 || s < 2))) {
      await sb.from("rappels").update({ [champ]: date }).eq("endpoint", r.endpoint);
      continue;
    }

    try {
      await webpush.sendNotification(r.abonnement, JSON.stringify({ ...message(type, prog?.prenom ?? "", s, fait, objectif), url: "./", tag: type }));
      await sb.from("rappels").update({ [champ]: date }).eq("endpoint", r.endpoint);
      envoyes++;
    } catch (e) {
      const code = (e as { statusCode?: number }).statusCode;
      if (code === 404 || code === 410) await sb.from("rappels").update({ actif: false }).eq("endpoint", r.endpoint);
      else console.error("Envoi impossible", code, e);
    }
  }
  return new Response(JSON.stringify({ ok: true, envoyes }), { headers: { "Content-Type": "application/json" } });
});
