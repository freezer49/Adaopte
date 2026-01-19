
<h1 align="center">🐾 Adaopte</h1>

<p align="center">
  <strong>Plateforme solidaire dédiée à l'adoption responsable d'animaux abandonnés</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
</p>

<p align="center">
  <a href="https://adaopte-lucas.vercel.app/">🌐 Voir la démo</a> •
  <a href="#-fonctionnalités">Fonctionnalités</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-équipe">Équipe</a>
</p>

---

## 🌐 Démo

**👉 [adaopte-lucas.vercel.app](https://adaopte-lucas.vercel.app/)**

---

## 📖 À propos

Adaopte est une plateforme solidaire qui permet de :

- 🐕 Découvrir les animaux disponibles à l'adoption
- 🔍 Rechercher par type d'animal et localisation
- 🤝 Mettre en relation adoptants et refuges

> _Projet réalisé dans le cadre de la formation [Ada Tech School](https://adatechschool.fr/) - Nantes_

---

## ✨ Fonctionnalités

### Pages développées

| Page                 | Description                     | Statut |
| -------------------- | ------------------------------- | :----: |
| **Accueil**          | Présentation + recherche rapide |   ✅   |
| **J'adopte**         | Liste des animaux avec filtres  |   ✅   |
| **Devenir bénévole** | Formulaire d'inscription        |   ✅   |

### Détails techniques

- ✅ **Filtrage dynamique** par type d'animal et localisation
- ✅ **Gestion des URL params** pour partager une recherche
- ✅ **Validation de formulaires** avec gestion d'erreurs
- ✅ **Composants réutilisables** (Card, Button, Filter, List)
- ✅ **Données typées** avec TypeScript
- ✅ **HTML sémantique** et accessibilité
- ✅ **Lien mailto:** pour le contact
- ✅ **Témoignages** de bénévoles

---

## 🛠️ Stack technique

| Catégorie       | Technologies    |
| --------------- | --------------- |
| **Framework**   | React 19        |
| **Langage**     | TypeScript      |
| **Build**       | Vite            |
| **Styling**     | Tailwind CSS    |
| **Routing**     | React Router 7  |
| **Formulaires** | React Hook Form |
| **Icônes**      | React Icons     |
| **Déploiement** | Vercel          |
| **Versioning**  | Git / GitHub    |

---

## 📁 Structure du projet

```
adaopte/
├── 📂 app/                       # Application React principale
│   ├── 📂 public/
│   │   └── images/               # Images des animaux et témoignages
│   │
│   ├── 📂 src/
│   │   ├── 📂 components/        # Composants réutilisables
│   │   │   ├── Header.tsx        # Navigation principale
│   │   │   ├── footer.tsx        # Pied de page
│   │   │   ├── Filter.tsx        # Filtres de recherche
│   │   │   ├── infoCard.tsx      # Carte d'information
│   │   │   ├── testimonyCard.tsx # Carte de témoignage
│   │   │   └── pageLinks.tsx     # Configuration des liens
│   │   │
│   │   ├── 📂 data/              # Données statiques
│   │   │   ├── animals.ts        # Liste des animaux
│   │   │   └── testimonies.ts    # Témoignages bénévoles
│   │   │
│   │   ├── 📂 pages/             # Pages de l'application
│   │       ├── Adoption.tsx      # Liste des animaux + filtres
│   │       └── Volunteer.tsx     # Formulaire bénévole
│   │── App.tsx                   # Page d'accueil
│   │── main.tsx                  # Point d'entrée + routing
│   │── index.css                 # Styles Tailwind + variables
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

---

## 🛤️ Routes de l'application

| Route        | Page      | Description                         |
| ------------ | --------- | ----------------------------------- |
| `/`          | Accueil   | Page d'accueil avec héro et galerie |
| `/Adoption`  | J'adopte  | Liste filtrable des animaux         |
| `/Volunteer` | Bénévolat | Formulaire et informations bénévole |

---

## 📋 Conventions Git

Commits en **anglais** suivant le format :

```
type(scope): description
```

| Type       | Usage                   |
| ---------- | ----------------------- |
| `feat`     | Nouvelle fonctionnalité |
| `fix`      | Correction de bug       |
| `style`    | Mise en forme, CSS      |
| `chore`    | Maintenance             |


---

## 👥 Équipe

Projet réalisé par des étudiants de [Ada Tech School](https://adatechschool.fr/) - Promotion Nantes 2025 - Mélissa Largilliere, Lucas Queveau et Chloé Verglas.

<!-- Ajoutez vos profils GitHub ci-dessous -->
<!--
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/piouoiq">
        <br /><sub><b>Melissa Largilliere</b></sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/pepito11878">
        <br /><sub><b>Lucas Queveau</b></sub>

            <td align="center">
      <a href="https://github.com/freezer49">
        <br /><sub><b>Chloé Verglas</b></sub>
      </a>
    </td>
      </a>
    </td>
  </tr>
</table>
-->

---

<p align="center">
  <sub>Fait avec ❤️ pour donner une seconde chance aux animaux</sub>
</p>
