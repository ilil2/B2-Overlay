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

    function setupImage() {
        console.log('3')
        // Vérification pour s'assurer que nous sommes sur le bon site
        if (window.location.href === 'https://liste.bdekraken.fr/place') {
            console.log('1')

            // Récupération du canvas par son ID (remplacez "nom-du-canvas" par l'ID réel de votre canvas)
            var canvas = document.getElementsByClassName("canvas svelte-1wet9f1");

            if (true) {
                // Obtention du contexte 2D du canvas
                var context = canvas[0].getContext('2d');

                // Chargement de l'image
                var image = new Image();
                image.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/OverlayB2.png'; // Remplacez par le chemin de votre image

                // Attendre que l'image soit chargée avant de la dessiner
                image.onload = function() {
                    // Position de l'image sur le canvas (ajustez ces valeurs selon vos besoins)
                    var x = (4080/255)*194;
                    var y = (4080/255)*5;

                    // Nouvelles dimensions de l'image sur le canvas
                    var newWidth = (4080/255); // Ajustez la nouvelle largeur selon vos besoins
                    var newHeight = (newWidth / image.width) * image.height; // Maintenir le ratio

                    // Rendre l'image plus opaque
                    //image.style.opacity = '0.35'; // La valeur peut varier de 0 (transparent) à 1 (opaque)
                    context.globalAlpha = '0.35'

                    // Dessiner l'image sur le canvas avec les nouvelles dimensions
                    context.drawImage(image, x, y, newWidth, newHeight);
                    console.log('gogogo');
                };
                console.log('gogogo2');
            }
            console.log('gogogo3');
        }
    }
    console.log('2')
    setTimeout(function() {
        setupImage();
    }, 5000); // ajustez le délai selon vos besoins
})();