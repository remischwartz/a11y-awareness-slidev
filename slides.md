---
background: https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920
title: Accessibilité Web - RGAA
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

<div class="mt-12 opacity-80">
Parce que l'accessibilité n'est pas une option
</div>

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Appuyez sur Espace pour commencer <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <a href="https://accessibilite.numerique.gouv.fr/" target="_blank" class="slidev-icon-btn">
    RGAA
  </a>
</div>

<!--
Présentation interactive sur l'accessibilité web destinée aux développeurs front-end.
Objectif : sensibiliser, éduquer et outiller les participants.
-->

---
layout: two-cols
layoutClass: gap-16
---

# Plan de la présentation

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

<div v-click class="text-center p-6 bg-blue-500/20 rounded-lg">
  <div class="text-5xl font-bold text-blue-400">20%</div>
  <div class="mt-2">de la population européenne est en situation de handicap</div>
  <div class="mt-3 text-xs opacity-80">
    Source :
    <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Population_with_disability" target="_blank" class="text-blue-300">Eurostat - Population with disability</a>
  </div>
</div>

<div v-click class="text-center p-6 bg-purple-500/20 rounded-lg">
  <div class="text-5xl font-bold text-purple-400">16%</div>
  <div class="mt-2">de la population mondiale vit avec un handicap significatif</div>
  <div class="mt-3 text-xs opacity-80">
    Source :
    <a href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health" target="_blank" class="text-blue-300">OMS - Disability (1.3 billion, 16%)</a>
  </div>
</div>

<div v-click class="text-center p-6 bg-green-500/20 rounded-lg">
  <div class="text-5xl font-bold text-green-400">100%</div>
  <div class="mt-2">des utilisateurs bénéficient d'une meilleure UX accessible</div>
  <div class="mt-3 text-xs opacity-80">
    Source :
    <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/#what" target="_blank" class="text-blue-300">W3C WAI - What is Web Accessibility</a>
  </div>
</div>

<div v-click class="text-center p-6 bg-orange-500/20 rounded-lg">
  <div class="text-5xl font-bold text-orange-400">60,5%</div>
  <div class="mt-2">des sites contrôlés sans mention de conformité (Arcom, 2024)</div>
  <div class="mt-3 text-xs opacity-80">
    Source :
    <a href="https://www.arcom.fr/se-documenter/etudes-et-donnees/etudes-bilans-et-rapports-de-larcom/laccessibilite-des-contenus-audiovisuels-et-numeriques-aux-personnes-en-situation-de-handicap-exercice-2024" target="_blank" class="text-blue-300">Arcom - Rapport accessibilité 2024 (583 sites contrôlés)</a>
  </div>
</div>

</div>

<div v-click class="mt-8 text-center text-2xl opacity-80">
💡 L'accessibilité profite à <span class="text-blue-400 font-bold">tous</span>
</div>

<!--
- Handicaps permanents, temporaires ou situationnels
- Obligations légales pour les services publics et grandes entreprises
- ROI positif : meilleur SEO, plus d'utilisateurs, moins de maintenance
-->

---

# Les 5 piliers de l'accessibilité

<div class="grid grid-cols-1 gap-4 mt-8">

<div v-click class="flex items-center gap-4 p-4 bg-blue-500/20 rounded-lg">
  <div class="text-3xl">👁️</div>
  <div>
    <div class="font-bold text-lg">Percevoir</div>
    <div class="opacity-80">Accéder au contenu avec des alternatives textuelles, sous-titres, etc.</div>
  </div>
</div>

<div v-click class="flex items-center gap-4 p-4 bg-purple-500/20 rounded-lg">
  <div class="text-3xl">🧠</div>
  <div>
    <div class="font-bold text-lg">Comprendre</div>
    <div class="opacity-80">Structure claire, langage simple, organisation logique</div>
  </div>
</div>

<div v-click class="flex items-center gap-4 p-4 bg-green-500/20 rounded-lg">
  <div class="text-3xl">🧭</div>
  <div>
    <div class="font-bold text-lg">Naviguer</div>
    <div class="opacity-80">Au clavier, à la souris, avec des technologies d'assistance</div>
  </div>
</div>

<div v-click class="flex items-center gap-4 p-4 bg-orange-500/20 rounded-lg">
  <div class="text-3xl">✍️</div>
  <div>
    <div class="font-bold text-lg">Contribuer</div>
    <div class="opacity-80">Remplir des formulaires, créer du contenu en toute autonomie</div>
  </div>
</div>

<div v-click class="flex items-center gap-4 p-4 bg-pink-500/20 rounded-lg">
  <div class="text-3xl">🤝</div>
  <div>
    <div class="font-bold text-lg">Interagir</div>
    <div class="opacity-80">Avec le contenu dynamique, sans obstacles techniques</div>
  </div>
</div>

</div>

---

# Utilisateurs et technologies d'assistance

<div class="grid grid-cols-2 gap-6 mt-8">

<div v-click class="p-4 bg-gray-800/50 rounded-lg">
  <div class="font-bold text-lg mb-3">👁️ Visuels</div>
  <div class="text-sm space-y-1">
    <div>🔊 Lecteur d'écran</div>
    <div>⌨️ Navigation clavier</div>
    <div>🔍 Zoom / loupe</div>
    <div>🎨 Personnalisation couleurs</div>
  </div>
</div>

<div v-click class="p-4 bg-gray-800/50 rounded-lg">
  <div class="font-bold text-lg mb-3">👂 Auditifs</div>
  <div class="text-sm space-y-1">
    <div>📝 Sous-titres</div>
    <div>🎙️ Transcriptions</div>
    <div>👁️ Vidéos avec interprète LSF</div>
  </div>
</div>

<div v-click class="p-4 bg-gray-800/50 rounded-lg">
  <div class="font-bold text-lg mb-3">🎮 Moteurs</div>
  <div class="text-sm space-y-1">
    <div>⌨️ Clavier monomanuel</div>
    <div>👀 Eye-tracking</div>
    <div>🎯 Headstick</div>
    <div>🧠 Contrôle par la pensée</div>
  </div>
</div>

<div v-click class="p-4 bg-gray-800/50 rounded-lg">
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

<v-clicks>

- 📋 **106 critères** répartis en 13 thématiques
- 🇫🇷 Version 4.1.2 basée sur les critères des niveaux A et AA des **WCAG 2.1** (Web Content Accessibility Guidelines)
- ⚖️ **Obligation légale** pour les organismes publics et entreprises > 250M€ CA

</v-clicks>

</div>

<div v-click class="mt-8 p-4 bg-red-500/20 border-l-4 border-red-500 rounded">
<div class="font-bold">⚠️ Obligations légales en France</div>
<div class="mt-2">3 catégories concernées par l'obligation RGAA</div>
</div>

---

# Qui doit se conformer au RGAA ?

<div class="space-y-3 mt-8">

<div v-click class="p-3 bg-blue-500/20 rounded-lg border-l-4 border-blue-500">
  <div class="font-bold text-base mb-1">🏛️ Secteur public & intérêt général</div>
  <div class="text-sm">État, collectivités, établissements publics, transports en commun, offices du tourisme, etc.</div>
</div>

<div v-click class="p-3 bg-green-500/20 rounded-lg border-l-4 border-green-500">
  <div class="font-bold text-base mb-1">💼 Entreprises privées : CA > 250M€</div>
  <div class="text-sm">Obligation depuis 2016 pour les grandes entreprises</div>
</div>

<div v-click class="p-3 bg-purple-500/20 rounded-lg border-l-4 border-purple-500">
  <div class="font-bold text-base mb-1">🆕 Entreprises : CA > 2M€ OU > 10 salariés</div>
  <div class="text-sm">Depuis 28 juin 2025 pour certains secteurs : banque, transports, audiovisuel, e-commerce, etc.</div>
</div>

</div>

<div v-click class="mt-6 p-3 bg-yellow-500/20 rounded-lg text-sm">
<div class="font-bold">📋 Obligations minimales (pour ces 3 catégories)</div>
<ul class="mt-2 list-disc list-inside space-y-1">
  <li>Conformité RGAA</li>
  <li>Déclaration d'accessibilité</li>
  <li>Moyens de contact</li>
  <li>Statut de conformité affiché</li>
  <li>Schéma pluriannuel (3 ans)</li>
</ul>
</div>

---

# Sanctions en cas de non-conformité

<div class="grid grid-cols-2 gap-4 mt-8">

<div v-click class="p-4 bg-red-500/20 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-base mb-2">🏛️ Secteur public</div>
  <div class="text-sm space-y-2">
    <div><strong>Sans déclaration :</strong></div>
    <div class="ml-4">2 000€ - 25 000€ par site</div>
    <div class="mt-2"><strong>Non-conforme :</strong></div>
    <div class="ml-4">Jusqu'à 50 000€</div>
    <div class="ml-4 text-xs opacity-80">(renouvelable tous les 6 mois)</div>
  </div>
</div>

<div v-click class="p-4 bg-red-500/20 rounded-lg border-l-4 border-red-500">
  <div class="font-bold text-base mb-2">💼 Secteur privé</div>
  <div class="text-sm space-y-2">
    <div><strong>Contravention 5e classe :</strong></div>
    <div class="ml-4">1 500€ (cumulatifs)</div>
    <div class="mt-2"><strong>Suspension possible</strong></div>
    <div class="text-xs opacity-80">Mise sur le marché des produits</div>
  </div>
</div>

</div>

<div v-click class="mt-4 p-3 bg-gray-800/50 rounded-lg text-sm">
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

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">🖼️</div>
  <div>
    <div class="font-bold">1. Images</div>
    <div class="opacity-75">Alternatives textuelles</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">🎬</div>
  <div>
    <div class="font-bold">2. Cadres</div>
    <div class="opacity-75">iframes</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">🎨</div>
  <div>
    <div class="font-bold">3. Couleurs</div>
    <div class="opacity-75">Contrastes</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">🎥</div>
  <div>
    <div class="font-bold">4. Multimédia</div>
    <div class="opacity-75">Sous-titres</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">📊</div>
  <div>
    <div class="font-bold">5. Tableaux</div>
    <div class="opacity-75">Structure</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">🔗</div>
  <div>
    <div class="font-bold">6. Liens</div>
    <div class="opacity-75">Intitulés</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">📝</div>
  <div>
    <div class="font-bold">7. Scripts</div>
    <div class="opacity-75">JavaScript</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">⚙️</div>
  <div>
    <div class="font-bold">8. Obligatoires</div>
    <div class="opacity-75">Doctype, langue</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">📐</div>
  <div>
    <div class="font-bold">9. Structuration</div>
    <div class="opacity-75">Sémantique</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">📖</div>
  <div>
    <div class="font-bold">10. Présentation</div>
    <div class="opacity-75">CSS</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">📋</div>
  <div>
    <div class="font-bold">11. Formulaires</div>
    <div class="opacity-75">Labels</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
  <div class="text-lg">🧭</div>
  <div>
    <div class="font-bold">12. Navigation</div>
    <div class="opacity-75">Menus</div>
  </div>
</div>

<div v-click class="flex items-start gap-2 p-2 bg-gray-800/50 rounded">
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

<div class="mb-8 p-8 bg-blue-500/20 rounded-lg">
  <div class="text-lg mb-4">Accédez au quiz en ligne :</div>
  <div class="text-xl font-bold text-blue-400">
    [Insérer le lien vers le quiz]
  </div>
</div>

<div class="mb-8">
  <div class="text-lg mb-4">Ou scannez le QR code :</div>
  <div class="inline-block p-6 bg-white rounded-lg">
    [Insérer le QR code ici]
  </div>
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

<div class="grid grid-cols-2 gap-6 mt-6">

<div v-click class="p-4 bg-gray-800/50 rounded-lg">
  <div class="flex items-center gap-3 mb-3">
    <div class="text-3xl">🔵</div>
    <div class="font-bold text-lg">axe Accessibility Linter</div>
  </div>
  <div class="text-sm opacity-80 mb-2">VS Code, IntelliJ, Sublime</div>
  <div class="text-sm">Détecte les problèmes d'accessibilité directement dans votre code HTML/JSX</div>
  <a href="https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter" target="_blank" class="text-xs text-blue-400">axe Accessibility Linter (VS Code)</a>
</div>

<div v-click class="p-4 bg-gray-800/50 rounded-lg">
  <div class="flex items-center gap-3 mb-3">
    <div class="text-3xl">✨</div>
    <div class="font-bold text-lg">ESLint Plugin JSX a11y</div>
  </div>
  <div class="text-sm opacity-80 mb-2">React, Vue, Svelte</div>
  <div class="text-sm">Règles ESLint pour vérifier l'accessibilité de vos composants</div>
  <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y" target="_blank" class="text-xs text-blue-400">Repo Github</a>
</div>


</div>


---

# Dans votre navigateur

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click class="p-3 bg-gray-800/50 rounded-lg border-l-4 border-purple-500">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🌊</div>
    <div class="font-bold">WAVE</div>
  </div>
  <div class="text-xs mb-2">Interface visuelle intuitive avec annotations.</div>
  <div class="text-xs bg-blue-500/20 p-1 rounded">💡 Parfait pour les débutants</div>
  <a href="https://wave.webaim.org/extension/" target="_blank" class="text-xs text-blue-400">WAVE Extension</a>
</div>

<div v-click class="p-3 bg-gray-800/50 rounded-lg">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🎯</div>
    <div class="font-bold">Lighthouse</div>
  </div>
  <div class="text-xs opacity-80 mb-1">Chrome DevTools intégré</div>
  <div class="text-xs">Audit : accessibilité, performance, SEO</div>
  <a href="https://developer.chrome.com/docs/lighthouse/overview" target="_blank" class="text-xs text-blue-400">Lighthouse</a>
</div>

<div v-click class="p-3 bg-gray-800/50 rounded-lg">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🎨</div>
    <div class="font-bold">WCAG Contrast Checker</div>
  </div>
  <div class="text-xs">Vérification rapide des contrastes WCAG</div>
  <a href="https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf" target="_blank" class="text-xs text-blue-400">Chrome</a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/" target="_blank" class="text-xs text-blue-400 ml-4">Firefox</a>
</div>

<div v-click class="p-3 bg-gray-800/50 rounded-lg">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🔤</div>
    <div class="font-bold">HeadingsMap</div>
  </div>
  <div class="text-xs opacity-80 mb-1">Chrome, Firefox</div>
  <div class="text-xs">Visualise la hiérarchie des titres</div>
  <a href="https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi" target="_blank" class="text-xs text-blue-400">Chrome</a>
  <a href="https://addons.mozilla.org/fr/firefox/addon/headingsmap/" target="_blank" class="text-xs text-blue-400 ml-4">Firefox</a>
</div>

</div>

---

# Lecteurs d'écran (Screen Readers)

<div class="mt-4">

<div v-click class="mb-4 p-3 bg-blue-500/20 rounded-lg border-l-4 border-blue-500">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🍎</div>
    <div class="font-bold text-lg">VoiceOver</div>
  </div>
  <div class="text-xs opacity-80 mb-2">macOS / iOS - Intégré et GRATUIT</div>
  <div class="grid grid-cols-2 gap-3 text-xs">
    <div>
      <strong>Activation :</strong> Cmd + F5<br>
      <strong>Navigation :</strong> Ctrl + Option + flèches
    </div>
    <div>
      <strong>Rotor :</strong> Ctrl + Option + U<br>
      <strong>Lecture :</strong> Ctrl + Option + A
    </div>
  </div>
  <div class="mt-3 text-xs">
    <strong>Sur iPhone (iOS) :</strong> Réglages > Accessibilité > VoiceOver.<br>
    <strong>Gestes de base :</strong> 1 tap = sélectionner, 2 taps = activer, glisser 1 doigt = explorer, glisser 3 doigts = défiler.
  </div>
</div>

<div v-click class="mb-4 p-3 bg-gray-800/50 rounded-lg">
  <div class="flex items-center gap-3 mb-2">
    <div class="text-2xl">🤖</div>
    <div class="font-bold text-lg">TalkBack</div>
  </div>
  <div class="text-xs opacity-80 mb-1">Android - Intégré et GRATUIT</div>
  <div class="text-xs">Lecteur d'écran mobile - Testez vos apps !</div>
  <div class="mt-2 text-xs">
    <strong>Activation :</strong> Parametres > Accessibilite > TalkBack.<br>
    <strong>Gestes de base :</strong> 1 tap = focus vocal, 2 taps = activer, glisser 2 doigts = defiler.
  </div>
</div>

</div>

---

# Checklist : par où commencer ?

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">

<div>

### ✅ Actions immédiates

<v-clicks>

- ✅ Installer les extensions IDE & navigateur
- ✅ Lancer une analyse WAVE/Tanaguru sur une page de votre projet
- ✅ Faire un test clavier sur 1 parcours cle
- ✅ Faire un test au lecteur d'ecran

</v-clicks>

</div>

<div>

### 🎯 Actions à planifier

<v-clicks>

- 🎯 Ajouter l'accessibilite à la DoD du projet et a vos checklists de PR
- 🎯 Corriger les images decoratives (`alt=""`)
- 🎯 Corriger les champs sans `<label>`
- 🎯 Verifier que l'outline de focus n'est jamais retire
- 🎯 Verifier les contrastes de couleurs (4.5:1)
- 🎯 Restructurer avec HTML semantique
- 🎯 Ajouter des landmarks ARIA si necessaire

</v-clicks>



</div>

</div>

<div v-click class="mt-8 p-4 bg-blue-500/20 rounded-lg border-l-4 border-blue-500">
<div class="font-bold">💡 Conseil : Intégrez l'accessibilité dès la conception</div>
<div class="mt-2">C'est plus simple (et moins coûteux) de faire les choses bien dès le début que de corriger après coup.</div>
</div>

---

# Ressources

<div class="mt-4 space-y-3">

<div v-click class="p-6 bg-gray-800/50 rounded-lg border-l-4 border-blue-500">
  <div class="text-sm opacity-80 mb-3">Retrouvez tous les liens vers différentes ressources sur la page Notion : </div>
  <a href="https://www.notion.so/fabernovel/Accessibilit-web-1ee4ee4a529d80b290f9e094f746515d?source=copy_link#2854ee4a529d8024a8f9ce054399db94" target="_blank" class="text-blue-400">
    Accessibilite web
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
