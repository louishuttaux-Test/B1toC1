/*
  CONFIGURATION SUPABASE
  ----------------------
  Colle ici les deux valeurs de ton projet Supabase
  (Project Settings › API) : l'URL du projet et la clé « anon public ».
  Cette clé est faite pour être publique : ce sont les règles de sécurité
  de la base (fichier supabase.sql) qui protègent les données.

  Tant que ces champs sont vides, le site fonctionne en mode local,
  sans compte ni synchronisation.
*/
window.CONFIG = {
  supabaseUrl: "https://segqvtgxuuquqztelcjy.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZ3F2dGd4dXVxdXF6dGVsY2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNDkwNzQsImV4cCI6MjEwNzYyNTA3NH0.d1WUiAf1jBRjTaSnC6WYHFcjqYkEv_cTGEJ-WWcMpIg",

  // Notifications : clé publique (elle peut être sur GitHub ; la clé privée, jamais).
  vapidPublicKey: "BMcVD_9yWH6yoprNH11SA_DDUgV-PTIW_6yzPHYqLmLsAjAaR54QgIle8KuJVq8-hjKxcSGQVk2qKONFjM03u8A",

  // Nom affiché dans les messages de l’application.
  nomApp: "Mon français"
};
