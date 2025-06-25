# Candidature Interactive - Agence Côte Ouest

Site web interactif pour candidature en alternance Assistant·e Communication chez l'Agence Côte Ouest.

## 🚀 Technologies

- React 18
- React Router v6
- Tailwind CSS
- Styled Components
- GSAP (animations)
- Canvas API (effets visuels)
- CSS Animations (bordures animées)
- Vite

## 📁 Structure

```
/
├── public/
│   └── CV_Etienne_Gaumery.pdf    # Votre CV PDF
├── src/
│   ├── components/
│   │   ├── DotGrid.jsx           # Animation interactive
│   │   ├── DotGrid.css           # Styles de l'animation
│   │   ├── ClickSpark.jsx        # Effet d'étincelles au clic
│   │   ├── StarBorder.jsx        # Bordures animées avec étoiles
│   │   ├── StarBorder.css        # Styles des bordures animées
│   │   └── ComicButton.jsx       # Style comic-button avec styled-components
│   ├── pages/
│   │   ├── Home.jsx              # Page d'accueil avec animations
│   │   ├── CV.jsx                # Page CV avec effets
│   │   └── Motivation.jsx        # Page lettre de motivation
│   ├── App.jsx                   # Composant principal avec routage
│   ├── main.jsx                  # Point d'entrée
│   └── index.css                 # Styles Tailwind
├── index.html                    # HTML principal avec favicon 🐚
├── vercel.json                   # Configuration Vercel
└── package.json
```

## 🛠 Installation

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📄 Pages

1. **Accueil** (`/`) :
   - Titre et deux boutons de navigation
   - Animation DotGrid interactive en arrière-plan
   - Effet ClickSpark sur les boutons
   - Bordures StarBorder animées
   - Style ComicButton avec effets 3D
   - Effets de hover et transitions fluides

2. **CV** (`/cv`) :
   - Curriculum vitae structuré
   - Bouton de téléchargement PDF avec effets ClickSpark + StarBorder + ComicButton
   - Sections : Expérience, Formation, Compétences
   - Bouton de retour avec animations

3. **Motivation** (`/motivation`) :
   - Lettre de motivation stylisée
   - Layout professionnel et lisible
   - Bouton de retour avec effets ClickSpark + StarBorder + ComicButton

## 🎨 Design & Animations

- **Animation DotGrid** : Grille de points interactive qui réagit au mouvement de la souris
- **Effet ClickSpark** : Étincelles animées au clic sur les boutons
- **Bordures StarBorder** : Bordures animées avec effet d'étoiles qui se déplacent
- **Style ComicButton** : Boutons avec effet 3D, ombres et animations
- Design responsive (mobile/desktop)
- Interface moderne et épurée
- Favicon personnalisé (🐚)
- Transitions fluides et animations GSAP
- Effets de hover et micro-interactions

## 🎯 Fonctionnalités

- Navigation fluide entre les pages
- Animation interactive en arrière-plan
- Effets d'étincelles au clic
- Bordures animées sur tous les boutons
- Style comic-button 3D sur tous les boutons
- Bouton de téléchargement CV PDF
- Boutons de retour à l'accueil
- Layout optimisé pour tous les écrans
- Performance optimisée avec Vite

## 🚀 Déploiement Vercel

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration Vite
3. Le site sera déployé avec l'URL : `https://votre-projet.vercel.app`

## 📝 Notes

- Remplacez le fichier `public/CV_Etienne_Gaumery.pdf` par votre vrai CV
- L'animation DotGrid est optimisée pour les performances
- L'effet ClickSpark utilise Canvas API pour de meilleures performances
- Les bordures StarBorder utilisent CSS Animations pour la fluidité
- Le style ComicButton utilise Styled Components pour la flexibilité
- Le site est compatible avec tous les navigateurs modernes
- Configuration Vercel incluse pour un déploiement optimal
