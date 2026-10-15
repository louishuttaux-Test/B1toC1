-- RAPPELS QUOTIDIENS (notifications)
-- À exécuter une seule fois dans Supabase : SQL Editor › New query › coller › Run.
-- À faire APRÈS avoir déployé la fonction « rappel » (voir README, étape 3).

-- 1. La table des abonnements aux notifications (un par appareil).
create table if not exists public.rappels (
  endpoint        text primary key,
  user_id         uuid not null references auth.users (id) on delete cascade,
  abonnement      jsonb not null,
  heure           text not null default '19:00',
  fuseau          text not null default 'Europe/Paris',
  actif           boolean not null default true,
  dernier_rappel  text,
  dernier_serie   text,
  maj             timestamptz not null default now()
);

alter table public.rappels enable row level security;

drop policy if exists "Lire ses rappels" on public.rappels;
drop policy if exists "Créer ses rappels" on public.rappels;
drop policy if exists "Modifier ses rappels" on public.rappels;

create policy "Lire ses rappels" on public.rappels for select using (auth.uid() = user_id);
create policy "Créer ses rappels" on public.rappels for insert with check (auth.uid() = user_id);
create policy "Modifier ses rappels" on public.rappels for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 2. Le réveil : toutes les 15 minutes, Supabase appelle la fonction « rappel »,
--    qui décide à qui envoyer une notification.
create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.unschedule('rappels-francais') where exists (select 1 from cron.job where jobname = 'rappels-francais');

select cron.schedule(
  'rappels-francais',
  '*/15 * * * *',
  $$
  select net.http_post(
    url     := 'https://segqvtgxuuquqztelcjy.supabase.co/functions/v1/rappel',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZ3F2dGd4dXVxdXF6dGVsY2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNDkwNzQsImV4cCI6MjEwNzYyNTA3NH0.d1WUiAf1jBRjTaSnC6WYHFcjqYkEv_cTGEJ-WWcMpIg"}'::jsonb,
    body    := '{}'::jsonb
  );
  $$
);
