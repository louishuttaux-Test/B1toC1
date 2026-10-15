-- À exécuter une seule fois dans Supabase : SQL Editor › New query › coller › Run.
-- Crée la table de progression et la protège : chaque compte ne voit et ne modifie que sa propre ligne.

create table if not exists public.progression (
  user_id  uuid primary key references auth.users (id) on delete cascade,
  prenom   text,
  donnees  jsonb not null default '{}'::jsonb,
  maj      timestamptz not null default now()
);

alter table public.progression enable row level security;

create policy "Lire sa progression"
  on public.progression for select
  using (auth.uid() = user_id);

create policy "Créer sa progression"
  on public.progression for insert
  with check (auth.uid() = user_id);

create policy "Modifier sa progression"
  on public.progression for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
