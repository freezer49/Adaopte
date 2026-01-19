<p align="center">
  <img src="./public/logo.svg" alt="Adaopte Logo" width="180"/>
</p>

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
| **Devenir bénévole** | Formulaire d'inscription + FAQ  |   ✅   |

### Détails techniques

- ✅ **Filtrage dynamique** par type d'animal et localisation
- ✅ **Gestion des URL params** pour partager une recherche
- ✅ **LocalStorage** pour la persistance des filtres
- ✅ **Validation de formulaires** avec gestion d'erreurs
- ✅ **Composants réutilisables** (Card, Button, Filter, List)
- ✅ **Données typées** avec TypeScript
- ✅ **HTML sémantique** et accessibilité
- ✅ **Lien mailto:** pour le contact
- ✅ **Témoignages** de bénévoles
- ✅ **Design responsive** mobile-first

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

## 🚀 Installation

### Prérequis

- [Node.js](https://nodejs.org/) v18+
- npm ou yarn

### Démarrage rapide

```bash
# 1. Cloner le repo
git clone https://github.com/votre-username/adaopte.git

# 2. Aller dans le dossier
cd adaopte

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de dev
npm run dev
```

🌐 Ouvrir [http://localhost:5173](http://localhost:5173)

### Scripts disponibles

```bash
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run preview   # Prévisualiser le build
npm run lint      # Vérifier le code
```

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
│   │   │   ├── Adoption.tsx      # Liste des animaux + filtres
│   │   │   └── Volunteer.tsx     # Formulaire bénévole
│   │   │
│   │   ├── 📂 assets/            # Assets statiques
│   │   ├── App.tsx               # Page d'accueil
│   │   ├── main.tsx              # Point d'entrée + routing
│   │   └── index.css             # Styles Tailwind + variables
│   │
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

---

## 🗄️ Modèle de données

Les données sont actuellement stockées en TypeScript dans `app/src/data/`.

### Structure d'un animal

```typescript
interface Animal {
  name: string; // Nom de l'animal
  age: string; // Âge (ex: "2 ans")
  breed: string; // Race
  type: "Chien" | "Chat" | "Lapin" | "Rongeur";
  city: string; // Ville
  zipcode: string; // Code postal
  description: string; // Description
  imageUrl: string; // URL de l'image
}
```

### Animaux disponibles

| Nom     | Type    | Race          | Ville      |
| ------- | ------- | ------------- | ---------- |
| Charlie | Chien   | Carlin        | Lille      |
| Mia     | Chat    | Noir et blanc | Strasbourg |
| Coco    | Lapin   | -             | Annecy     |
| Rex     | Chien   | Chow-Chow     | Grenoble   |
| Luna    | Chat    | Roux          | Bordeaux   |
| Biscuit | Rongeur | Cochon d'Inde | Tours      |
| Rio     | Lapin   | Nain brun     | Poitiers   |
| Ruby    | Chien   | Samoyède      | Chamonix   |

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
| `docs`     | Documentation           |
| `refactor` | Refactorisation         |
| `chore`    | Maintenance             |

**Exemples :**

```bash
feat(filter): add location dropdown
fix(card): resolve image aspect ratio
style(home): improve hero section spacing
```

---

## 👥 Équipe

Projet réalisé par des étudiants de l'[Ada Tech School](https://adatechschool.fr/) - Promotion Nantes 2025

<!-- Ajoutez vos profils GitHub ci-dessous -->
<!--
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/votre-username">
        <img src="https://github.com/votre-username.png" width="80px;" alt=""/>
        <br /><sub><b>Prénom Nom</b></sub>
      </a>
    </td>
  </tr>
</table>
-->

---

## 📄 Licence

Projet pédagogique - **Ada Tech School** Nantes 2025

---

<p align="center">
  <sub>Fait avec ❤️ pour donner une seconde chance aux animaux</sub>
</p>
