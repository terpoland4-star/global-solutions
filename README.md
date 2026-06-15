# HAM Global Words — Solutions linguistiques & digitales

Landing page pour **HAM Global Words**, un prestataire linguistique multilingue et humanitaire offrant également des services de création de sites web, applications, et solutions digitales sur mesure.  
Construit avec **React + Vite**, **Tailwind CSS v3**, déployé sur **GitHub Pages**.

## Sections principales

- **Hero** – Titre accrocheur, badges (RWS Group, Expertise Inde), blobs lumineux, mockup interactif du tableau de bord, preuve sociale (15+ organisations).
- **Services** – 5 cartes présentant : traduction & annotation IA (RWS Group), solutions digitales & e‑commerce, interprétation humanitaire & militaire, lexicographie (dictionnaire tadaksahak), expertise Inde.
- **Réalisations clés** – Achievements interactifs (liens vers dictionnaire, Niger Laptops, missions Takuba, etc.).
- **Partenaires** – Logos textuels des organisations partenaires (OIM, UNHCR, Barkhane, etc.).
- **Appel à l’action** – Devis combiné, téléchargement de plaquette.
- **Footer** – Newsletter (Netlify Forms), liens vers services, ressources, mentions légales.

## Stack technique

| Outil | Rôle |
|-------|------|
| React 18 | Bibliothèque UI |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 + PostCSS | Styles utilitaires |
| Lucide React | Icônes |
| Netlify Forms | Inscription newsletter (formulaire statique) |
| Google Fonts (Inter) | Typographie |
| TypeScript 5 | Typage strict |

## Architecture

- **Single‑page** : tout le contenu est dans `src/App.tsx` (pas de routage).
- **Données** : services et réalisations dans `src/data/services.ts` avec mapping d’icônes.
- **Styles** : `src/styles.css` contient les variables CSS, animations et classes de découpe.
- **Formulaires** : `public/forms.html` est un squelette statique pour Netlify Forms.

## Exécution locale

```bash
npm install
npm run dev
