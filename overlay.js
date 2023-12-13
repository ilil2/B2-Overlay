// ==UserScript==
// @name         B2 Overlay
// @namespace    https://github.com/ilil2/B2-Overlay
// @version      0.1
// @description  WIN AGAINST D2
// @author       B2
// @match        https://liste.bdekraken.fr/place
// @grant        none
// @updateURL    https://github.com/ilil2/B2-Overlay/blob/main/overlay.js
// @downloadURL  https://github.com/ilil2/B2-Overlay/blob/main/overlay.js
// ==/UserScript==
(function() {
    'use strict';

    // URL de votre image (doit être hébergée en ligne)
    const imageUrl = "https://github.com/ilil2/B2-Overlay/blob/main/image.png";

    // Créer un élément d'image et le configurer
    const overlayImage = new Image();
    overlayImage.src = imageUrl;
    overlayImage.style = 'position: absolute; left: 0; top: 0; z-index: 1000; opacity: 0.5;';

    // Ajouter l'image au corps de la page
    document.body.appendChild(overlayImage);
})();
