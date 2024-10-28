// ==UserScript==
// @name         krak Overlay 2024
// @namespace    https://github.com/ilil2/B2-Overlay
// @version      0.2
// @description  WIN AGAINST D2
// @author       WarpGates Studio
// @match        https://place.liste.bdekraken.fr
// @match        https://place.liste.bdekraken.fr/
// @grant        none
// @icon         https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/image.png
// @updateURL    https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/B2-Overlay-0.1.user.js
// @downloadURL  https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/B2-Overlay-0.1.user.js
// ==/UserScript==


(function() {
    'use strict';

    function setupImage() {
        if (window.location.href === 'https://place.liste.bdekraken.fr/') {

            var canvas = document.getElementsByClassName("canvas svelte-1kjn625");

            if (true) {
                var context = canvas[0].getContext('2d');

                var image = new Image();
                image.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/r2b2-3px.png';
                var image2 = new Image();
                image2.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/rick-3px.png';

                image.onload = function() {
                    var x = (4080/255)*218;
                    var y = (4080/255)*208;
                    var x2 = (4080/255)*100;
                    var y2 = (4080/255)*100;

                    var newWidth = (4080/255)*22;
                    var newHeight = (newWidth / image.width) * image.height;
                    var newWidth2 = (4080/255)*47;
                    var newHeight2 = (newWidth2 / image2.width) * image2.height;

                    context.globalAlpha = '1'

                    context.drawImage(image, x, y, newWidth, newHeight);
                    context.drawImage(image2, x2, y2, newWidth2, newHeight2);
                };
            }
        }
    }
    setTimeout(function() {
        setupImage();
    }, 5000);
    setInterval(function() {
        setupImage();
    }, 10);
})();
