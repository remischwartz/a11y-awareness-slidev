---
background: https://images.unsplash.com/photo-1634947096506-6d9f114cf64e?auto=format&fit=crop&w=1920&q=80&sat=-20&blend=000000&bm=multiply&balph=45
dim: true
title: Accessibilité Web - RGAA
theme: ./theme
info: |
  ## Accessibilité Web pour Développeurs Front-End
  Présentation basée sur le RGAA (Référentiel Général d'Amélioration de l'Accessibilité)
  
  Durée : 50 minutes
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
duration: 50min
---

# Accessibilité Web 🌐

## Le web pour tous : comprendre et appliquer le RGAA

<!--
Présentation interactive sur l'accessibilité web destinée aux développeurs front-end.
Objectif : sensibiliser, éduquer et outiller les participants.
-->

---
layout: two-cols
layoutClass: gap-16
---

# Plan de la présentation

::left::

<div class="text-xl space-y-6 mt-8">

<div v-click>
<div class="text-3xl">🎯 Partie 1</div>
<div class="opacity-80 ml-2">Pourquoi l'accessibilité ?</div>
</div>

<div v-click>
<div class="text-3xl">🎮 Partie 2</div>
<div class="opacity-80 ml-2">Quiz interactif</div>
</div>

<div v-click>
<div class="text-3xl">🛠️ Partie 3</div>
<div class="opacity-80 ml-2">Outils et ressources</div>
</div>

</div>

::right::

<div class="mt-8 text-xl">

⏱️ **Durée totale : 50 minutes**

- 🎯 Partie 1 : **15 min**
- 🎮 Partie 2 : **20 min**
- 🛠️ Partie 3 : **15 min**

</div>

---
transition: fade-out
layout: center
class: text-center
---

# Partie 1

## Pourquoi l'accessibilité ?

<div class="text-6xl mt-8">
🌍
</div>

---

# L'accessibilité en chiffres

<div class="grid grid-cols-2 gap-8 mt-8">

<div v-click class="text-center p-6 bg-blue/20 rounded-lg border-l-4 border-blue">
  <div class="text-5xl font-bold text-blue">20%</div>
  <div class="mt-2">de la population européenne est en situation de handicap</div>
  <div class="mt-3 text-xs opacity-80">
    Source :
    <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Population_with_disability" target="_blank" >Eurostat - Population with disability</a>
  </div>
</div>

<div v-click class="text-center p-6 bg-purple/20 rounded-l border-l-4 border-purple">
  <div class="text-5xl font-bold text-purple">16%</div>
  <div class="mt-2">de la population mondiale vit avec un handicap significatif</div>
  <div class="mt-3 text-xs opacity-80">
    Source :
    <a href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health" target="_blank" >OMS - Disability (1.3 billion, 16%)</a>
  </div>
</div>

<div v-click class="text-center p-6 bg-green/30 rounded-lg border-l-4 border-green">
  <div class="text-5xl font-bold text-green">100%</div>
  <div class="mt-2">des utilisateurs bénéficient d'une meilleure UX accessible</div>
  <div class="mt-3 text-xs opacity-80">
    Source :
    <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/#what" target="_blank" >W3C WAI - What is Web Accessibility</a>
  </div>
</div>

<div v-click class="text-center p-6 bg-orange/20 rounded-lg border-l-4 border-orange">
  <div class="text-5xl font-bold text-orange">60,5%</div>
  <div class="mt-2">des sites contrôlés sans mention de conformité (Arcom, 2024)</div>
  <div class="mt-3 text-xs opacity-80">
    Source :
    <a href="https://www.arcom.fr/se-documenter/etudes-et-donnees/etudes-bilans-et-rapports-de-larcom/laccessibilite-des-contenus-audiovisuels-et-numeriques-aux-personnes-en-situation-de-handicap-exercice-2024" target="_blank" >Arcom - Rapport accessibilité 2024 (583 sites contrôlés)</a>
  </div>
</div>

</div>

<!--
- Handicaps permanents, temporaires ou situationnels
- Obligations légales pour les services publics et grandes entreprises
- ROI positif : meilleur SEO, plus d'utilisateurs, moins de maintenance
-->

---

# Les 5 piliers de l'accessibilité

<div class="grid grid-cols-2 gap-3 mt-6">

<div v-click class="h-24 flex items-center gap-3 p-3 bg-blue/20 rounded-lg border-l-4 border-blue">
  <div class="text-2xl">👁️</div>
  <div>
    <div class="font-bold text-base">Percevoir</div>
    <div class="text-sm opacity-80">Accéder au contenu avec des alternatives textuelles, sous-titres, etc.</div>
  </div>
</div>

<div v-click class="h-24 flex items-center gap-3 p-3 bg-purple/20 rounded-lg border-l-4 border-purple">
  <div class="text-2xl">🧠</div>
  <div>
    <div class="font-bold text-base">Comprendre</div>
    <div class="text-sm opacity-80">Structure claire, langage simple, organisation logique</div>
  </div>
</div>

<div v-click class="h-24 flex items-center gap-3 p-3 bg-green/20 rounded-lg border-l-4 border-green">
  <div class="text-2xl">🧭</div>
  <div>
    <div class="font-bold text-base">Naviguer</div>
    <div class="text-sm opacity-80">Au clavier, à la souris, avec des technologies d'assistance</div>
  </div>
</div>

<div v-click class="h-24 flex items-center gap-3 p-3 bg-orange/20 rounded-lg border-l-4 border-orange">
  <div class="text-2xl">✍️</div>
  <div>
    <div class="font-bold text-base">Contribuer</div>
    <div class="text-sm opacity-80">Remplir des formulaires, créer du contenu en toute autonomie</div>
  </div>
</div>

<div v-click class="h-24 col-span-2 w-full max-w-3xl mx-auto flex items-center gap-3 p-3 bg-fuchsia/20 rounded-lg border-l-4 border-fuchsia">
  <div class="text-2xl">🤝</div>
  <div>
    <div class="font-bold text-base">Interagir</div>
    <div class="text-sm opacity-80">Avec le contenu dynamique, sans obstacles techniques</div>
  </div>
</div>

</div>

---

# Utilisateurs et technologies d'assistance

<div class="grid grid-cols-2 gap-6 mt-8">

<div v-click class="p-4 bg-dark/50 rounded-lg border-l-4 border-white">
  <div class="font-bold text-lg mb-3">👁️ Visuels</div>
  <div class="text-sm space-y-1">
    <div>🔊 Lecteur d'écran</div>
    <div>⌨️ Navigation clavier</div>
    <div>🔍 Zoom / loupe</div>
    <div>🎨 Personnalisation couleurs</div>
  </div>
</div>

<div v-click class="p-4 bg-dark/50 rounded-lg border-l-4 border-white">
  <div class="font-bold text-lg mb-3">👂 Auditifs</div>
  <div class="text-sm space-y-1">
    <div>📝 Sous-titres</div>
    <div>🎙️ Transcriptions</div>
    <div>👁️ Vidéos avec interprète LSF</div>
  </div>
</div>

<div v-click class="p-4 bg-dark/50 rounded-lg border-l-4 border-white">
  <div class="font-bold text-lg mb-3">🎮 Moteurs</div>
  <div class="text-sm space-y-1">
    <div>⌨️ Clavier monomanuel</div>
    <div>👀 Eye-tracking</div>
    <div>🎯 Headstick</div>
    <div>🧠 Contrôle par la pensée</div>
  </div>
</div>

<div v-click class="p-4 bg-dark/50 rounded-lg border-l-4 border-white">
  <div class="font-bold text-lg mb-3">🧭 Cognitifs</div>
  <div class="text-sm space-y-1">
    <div>📖 Langage simplifié</div>
    <div>⏱️ Temps illimité</div>
    <div>📋 Navigation claire</div>
    <div>⚡ Pas de clignotement</div>
  </div>
</div>

</div>

---

# Le RGAA, c'est quoi ?

<div class="mt-8">

**RGAA** = Référentiel Général d'Amélioration de l'Accessibilité

<v-clicks class="mt-3">

- 📋 **106 critères** répartis en 13 thématiques
- 🇫🇷 Version 4.1.2 basée sur les critères des niveaux A et AA des **WCAG 2.1** (Web Content Accessibility Guidelines)
- ⚖️ Cadre légal : obligation RGAA stricte pour le secteur public et les grandes entreprises, et obligation d'accessibilité pour d'autres acteurs depuis 2025

</v-clicks>

</div>

<div v-click class="mt-8 p-4 bg-red/20 border-l-4 border-red rounded">
<div class="font-bold">⚠️ Obligations légales en France</div>
<div class="mt-2">3 catégories concernées par les obligations d'accessibilité numérique</div>
</div>

<!--
Pas parfait, ne veux pas dire qu'il n'y aura plus d'amélioration d'accessibilité possible, mais déjà une bonne base de référence et de comparaison.
-->

---

# Qui est concerné par les obligations d'accessibilité ?

<div class="space-y-2 mt-8">

<div v-click class="p-3 bg-blue/20 rounded-lg border-l-4 border-blue">
  <div class="font-bold text-base mb-1">🏛️ Secteur public & intérêt général</div>
  <div class="text-sm">État, collectivités, établissements publics, transports en commun, offices du tourisme, etc.</div>
</div>

<div v-click class="p-3 bg-green/20 rounded-lg border-l-4 border-green">
  <div class="font-bold text-base mb-1">💼 Entreprises privées : CA > 250M€</div>
  <div class="text-sm">Obligation depuis 2016 pour les grandes entreprises</div>
</div>

<div v-click class="p-3 bg-purple/20 rounded-lg border-l-4 border-purple">
  <div class="font-bold text-base mb-1">🆕 Entreprises : CA > 2M€ OU > 10 salariés</div>
  <div class="text-sm">Depuis le 28 juin 2025 (selon secteur) : obligation d'être accessible, avec un flou juridique sur l'obligation RGAA stricte et la déclaration associée.</div>
</div>

</div>

<div v-click class="mt-2 p-3 bg-teal/20 rounded-lg text-sm">
<div class="font-bold">📋 Obligations documentaires à publier</div>
<ul class="mt-2 list-disc list-inside">
  <li class="leading-5!">Conformité au référentiel choisi (RGAA recommandé en France)</li>
  <li class="leading-5!">Déclaration d'accessibilité</li>
  <li class="leading-5!">Moyens de contact</li>
  <li class="leading-5!">Statut de conformité affiché</li>
  <li class="leading-5!">Schéma pluriannuel (3 ans)</li>
  <li class="leading-5!">Plan d'actions annuel (actions de l'année + suivi des années précédentes)</li>
</ul>
</div>

<!-- Pour les entreprises concernées par les seuils > 2M€ ou > 10 salariés, l'obligation est d'être accessible. La méthode peut être RGAA, WCAG ou équivalent, selon votre stratégie de conformité. -->

---

# Sanctions en cas de non-conformité

<div class="grid grid-cols-2 gap-4 mt-8">

<div v-click class="p-4 bg-red/20 rounded-lg border-l-4 border-red">
  <div class="font-bold text-base mb-2">🏛️ Secteur public</div>
  <div class="text-sm space-y-2">
    <div><strong>Sans déclaration :</strong></div>
    <div class="ml-4">2 000€ - 25 000€ par site</div>
    <div class="mt-2"><strong>Non-conforme :</strong></div>
    <div class="ml-4">Jusqu'à 50 000€</div>
    <div class="ml-4 text-xs ">(renouvelable tous les 6 mois)</div>
  </div>
</div>

<div v-click class="p-4 bg-red/20 rounded-lg border-l-4 border-red">
  <div class="font-bold text-base mb-2">💼 Secteur privé</div>
  <div class="text-sm space-y-2">
    <div><strong>Contravention 5e classe :</strong></div>
    <div class="ml-4">1 500€ (cumulatifs)</div>
    <div class="mt-2"><strong>Suspension possible</strong></div>
    <div class="text-xs ">Mise sur le marché des produits</div>
  </div>
</div>

</div>

<div v-click class="mt-4 p-3 bg-dark/50 rounded-lg text-sm">
<div class="font-bold">🚨 Autorités de contrôle</div>
<ul class="mt-1 list-disc list-inside space-y-1">
  <li>Arcom (audiovisuel)</li>
  <li>DGCCRF (e-commerce)</li>
  <li>ARCEP (télécoms)</li>
  <li>ACPR (finance)</li>
</ul>
</div>

---

# Les 13 thématiques du RGAA

<div class="grid grid-cols-2 gap-2 mt-1 text-xs">

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">🖼️</div>
  <div>
    <div class="font-bold">1. Images</div>
    <div class="opacity-75">Alternatives textuelles</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">🎬</div>
  <div>
    <div class="font-bold">2. Cadres</div>
    <div class="opacity-75">iframes</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">🎨</div>
  <div>
    <div class="font-bold">3. Couleurs</div>
    <div class="opacity-75">Contrastes</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">🎥</div>
  <div>
    <div class="font-bold">4. Multimédia</div>
    <div class="opacity-75">Sous-titres</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">📊</div>
  <div>
    <div class="font-bold">5. Tableaux</div>
    <div class="opacity-75">Structure</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">🔗</div>
  <div>
    <div class="font-bold">6. Liens</div>
    <div class="opacity-75">Intitulés</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">📝</div>
  <div>
    <div class="font-bold">7. Scripts</div>
    <div class="opacity-75">JavaScript</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">⚙️</div>
  <div>
    <div class="font-bold">8. Obligatoires</div>
    <div class="opacity-75">Doctype, langue</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">📐</div>
  <div>
    <div class="font-bold">9. Structuration</div>
    <div class="opacity-75">Sémantique</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">📖</div>
  <div>
    <div class="font-bold">10. Présentation</div>
    <div class="opacity-75">CSS</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">📋</div>
  <div>
    <div class="font-bold">11. Formulaires</div>
    <div class="opacity-75">Labels</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">🧭</div>
  <div>
    <div class="font-bold">12. Navigation</div>
    <div class="opacity-75">Menus</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-dark/50 rounded border-l-4 border-white">
  <div class="text-lg">📱</div>
  <div>
    <div class="font-bold">13. Consultation</div>
    <div class="opacity-75">Responsive et zoom</div>
  </div>
</div>

</div>

---
layout: center
class: text-center
---

# Partie 2

## Quiz : Testez vos connaissances !

<div class="text-6xl mt-8">
🎮
</div>



---
layout: center
class: text-center
---

# Partie 3

## Outils et ressources

<div class="text-6xl mt-8">
🛠️
</div>

<div class="mt-8 text-xl opacity-80">
Passez à l'action dès demain !
</div>

---

# Dans votre IDE

<div class="grid grid-cols-2 gap-6 mt-20">

<div v-click class="p-4 bg-dark/50 rounded-lg border-l-4 border-blue">
  <div class="flex items-center gap-3 mb-3">
    <div class="text-3xl">🔵</div>
    <div class="font-bold text-lg">axe Accessibility Linter</div>
  </div>
  <div class="text-sm opacity-80 mb-2">VS Code, IntelliJ, Sublime</div>
  <div class="text-sm">Détecte les problèmes d'accessibilité directement dans votre code HTML/JSX</div>
  <a href="https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter" target="_blank" class="text-xs text-blue">axe Accessibility Linter (VS Code)</a>
</div>

<div v-click class="p-4 bg-dark/50 rounded-lg border-l-4 border-yellow">
  <div class="flex items-center gap-3 mb-3">
    <div class="text-3xl">✨</div>
    <div class="font-bold text-lg">ESLint Plugin JSX a11y</div>
  </div>
  <div class="text-sm opacity-80 mb-2">React, Vue, Svelte</div>
  <div class="text-sm">Règles ESLint pour vérifier l'accessibilité de vos composants</div>
  <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y" target="_blank" class="text-xs text-blue">Repo Github</a>
</div>


</div>


---

# Dans votre navigateur

<div class="grid grid-cols-3 gap-4 mt-12">

<div v-click class="p-3 bg-dark/50 rounded-lg border-l-4 border-blue">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🌊</div>
    <div class="font-bold">WAVE</div>
  </div>
  <div class="text-xs mb-2">Interface visuelle intuitive avec annotations.</div>
  <div class="text-xs bg-blue/20 p-1 rounded">💡 Parfait pour les débutants</div>
  <a href="https://wave.webaim.org/extension/" target="_blank" class="text-xs text-blue">WAVE Extension</a>
</div>

<div v-click class="p-3 bg-dark/50 rounded-lg border-l-4 border-orange">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🎯</div>
    <div class="font-bold">Lighthouse</div>
  </div>
  <div class="text-xs opacity-80 mb-1">Chrome DevTools intégré</div>
  <div class="text-xs">Audit : accessibilité, performance, SEO</div>
  <a href="https://developer.chrome.com/docs/lighthouse/overview" target="_blank" class="text-xs text-blue">Lighthouse</a>
</div>

<div v-click class="p-3 bg-dark/50 rounded-lg border-l-4 border-purple">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🎨</div>
    <div class="font-bold">WCAG Contrast Checker</div>
  </div>
  <div class="text-xs">Vérification rapide des contrastes WCAG</div>
  <a href="https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf" target="_blank" class="text-xs text-blue">Chrome</a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/" target="_blank" class="text-xs text-blue ml-4">Firefox</a>
</div>

<div v-click class="p-3 bg-dark/50 rounded-lg border-l-4 border-cyan">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🔤</div>
    <div class="font-bold">HeadingsMap</div>
  </div>
  <div class="text-xs opacity-80 mb-1">Chrome, Firefox</div>
  <div class="text-xs">Visualise la hiérarchie des titres</div>
  <a href="https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi" target="_blank" class="text-xs text-blue">Chrome</a>
  <a href="https://addons.mozilla.org/fr/firefox/addon/headingsmap/" target="_blank" class="text-xs text-blue ml-4">Firefox</a>
</div>

<div v-click class="p-3 bg-dark/50 rounded-lg border-l-4 border-teal">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🧪</div>
    <div class="font-bold">Assistant RGAA</div>
  </div>
  <div class="text-xs opacity-80 mb-1">État des lieux et préparation d'audit</div>
  <div class="text-xs">Permet de passer les critères et de structurer une pré-analyse.</div>
  <a href="https://accessibilite.numerique.gouv.fr/" target="_blank" class="text-xs text-blue">Ressources RGAA officielles</a>
</div>

</div>

<div v-click class="mt-4 p-3 bg-amber/20 rounded-lg text-sm border-l-4 border-amber">
  <div class="font-bold">⚠️ Important</div>
  <div class="mt-1">Les outils automatisés couvrent seulement une petite partie de la conformité. Ils détectent des signaux techniques, mais pas la qualité réelle de l'expérience (sens, compréhension, parcours, annonces vocales, etc.).</div>
</div>

---

# AI powered a11y

<div class="mt-8 text-base space-y-4">

<div v-click class="p-3 bg-blue/15 rounded-lg border-l-4 border-blue">
  <div class="font-bold">1. Ajouter le skill</div>
  <div class="mt-1"><code>~/.agents/skills/rgaa-accessibilite/SKILL.md</code></div>
  <a href="https://www.notion.so/Skill-RGAA-a11y-3224ee4a529d8010a1e1c7937916f41f?pvs=21" target="_blank" class="text-cyan underline">Skill RGAA a11y</a>
</div>

<div v-click class="pt-1">
</div>

<div v-click class="p-3 bg-dark/50 rounded-lg border-l-4 border-green text-sm">
  <div class="font-bold mb-2">2. Utilisation avec prompts</div>
  <ul>
    <li>
      <strong>Audit :</strong><br>
      <code>Audit RGAA de ce composant, liste les critères, écarts, correctifs et tests.</code>
    </li>
    <li>
      <strong>Implémentation :</strong><br>
      <code>Crée ce composant en conformité RGAA avec preuves de vérification.</code>
    </li>
    <li>
      <strong>Revue PR :</strong><br>
      <code>Review accessibilité RGAA de cette diff, avec sévérité et critères concernés.</code>
    </li>
  </ul>
</div>

</div>

---

# Lecteurs d'écran (Screen Readers)

<div class="grid  gap-3 mt-3 items-stretch">

<div v-click class="h-full p-3 bg-dark/50 rounded-lg border-l-4 border-blue flex flex-col">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🍎</div>
    <div class="font-bold text-lg">VoiceOver - Mac</div>
  </div>
  <div class="text-xs opacity-80 mb-2">macOS - Intégré et gratuit</div>
  <div class="text-xs flex-1">
    <strong>Activation :</strong> Cmd + F5<br>
    <strong>Navigation :</strong> Ctrl + Option + flèches<br>
    <strong>Rotor :</strong> Ctrl + Option + U<br>
    <strong>Lecture :</strong> Ctrl + Option + A
  </div>
  <div class="text-xs mt-6">🥇 <strong>Pour le faire taire :</strong> Ctrl</div>
</div>

<div v-click class="h-full p-3 bg-dark/50 rounded-lg border-l-4 border-cyan flex flex-col">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">📱</div>
    <div class="font-bold text-lg">VoiceOver - iPhone</div>
  </div>
  <div class="text-xs opacity-80 mb-2">iOS - Intégré et gratuit</div>
  <div class="text-xs flex-1">
    <strong>Activation :</strong> 3 appuis sur le bouton latéral, ou Réglages > Accessibilité > VoiceOver.<br>
    <strong>Gestes :</strong> 1 tap = sélectionner, 2 taps = activer, glisser 1 doigt = explorer, glisser 3 doigts = défiler.
  </div>
</div>

<div v-click class="h-full p-3 bg-dark/50 rounded-lg border-l-4 border-green flex flex-col">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🤖</div>
    <div class="font-bold text-lg">TalkBack</div>
  </div>
  <div class="text-xs opacity-80 mb-2">Android - Intégré et gratuit</div>
  <div class="text-xs flex-1">
    <strong>Activation :</strong> maintenir les 2 boutons de volume quelques secondes, ou Paramètres > Accessibilité > TalkBack.<br>
    <strong>Gestes :</strong> 1 tap = focus vocal, 2 taps = activer, glisser 2 doigts = défiler.
  </div>
</div>

</div>

---

# Checklist : par où commencer ?

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

## ✅ Actions immédiates

<v-clicks class="mt-3">

- ✅ Installer les extensions IDE & navigateur
- ✅ Lancer une analyse WAVE/Tanaguru sur une page de votre projet
- ✅ Faire un test clavier sur 1 parcours clé
- ✅ Faire un test au lecteur d'écran

</v-clicks>

</div>

<div>

## 🎯 Actions à planifier

<v-clicks class="mt-3">

- 🎯 Ajouter l'accessibilité à la DoD du projet et à vos checklists de PR
- 🎯 Lire les critères du RGAA
- 🎯 Suivre les patterns du W3C pour la création d'un nouveau composant

</v-clicks>



</div>

</div>

<div class="grid grid-cols-2 gap-6 mt-8 text-sm">

<div>

## 🏆 Exemples de quick win

<v-clicks>

- 🏆 Corriger les images décoratives (`alt=""`)
- 🏆 Corriger les champs sans `<label>`
- 🏆 Vérifier que l'outline de focus n'est jamais retiré
- 🏆 Vérifier les contrastes de couleurs (4.5:1)
- 🏆 Restructurer avec HTML sémantique
- 🏆 `role="status"` pour annoncer les actions asynchrones 
- 🏆 `aria-describedby` pour relier les erreurs ou aides 
</v-clicks>



</div>
<div v-click class="mt-8 p-4 bg-blue/20 rounded-lg border-l-4 border-blue self-center">
<div class="font-bold">💡 Conseil : Intégrez l'accessibilité dès la conception</div>
<div class="mt-2">C'est plus simple (et moins coûteux) de faire les choses bien dès le début que de corriger après coup.</div>
</div>
</div>

---

# Ressources

<div class="mt-4 space-y-3">

<div v-click class="mt-12 p-6 bg-dark/50 rounded-lg border-l-4 border-blue">
  <div class=" mb-3">Retrouvez tous les liens vers différentes ressources sur la page Notion : </div>
  <a href="https://www.notion.so/fabernovel/Accessibilit-web-1ee4ee4a529d80b290f9e094f746515d?source=copy_link#2854ee4a529d8024a8f9ce054399db94" target="_blank" class="text-blue">
    Accessibilité web
  </a>
</div>

</div>


---
layout: center
class: text-center
---

# Merci ! 🙏

## Des questions ?


<style>
a {
  text-decoration: underline;
}
</style>
