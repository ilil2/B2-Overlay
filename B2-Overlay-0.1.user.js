// ==UserScript==
// @name         B2 Overlay
// @namespace    https://github.com/ilil2/B2-Overlay
// @version      0.1
// @description  WIN AGAINST D2
// @author       WarpGates Studio
// @match        https://liste.bdekraken.fr/place
// @grant        none
// @icon         https://raw.githubusercontent.com/ilil2/B2-Overlay/main/image.png
// @updateURL    https://raw.githubusercontent.com/ilil2/B2-Overlay/main/B2-Overlay-0.1.user.js
// @downloadURL  https://raw.githubusercontent.com/ilil2/B2-Overlay/main/B2-Overlay-0.1.user.js
// ==/UserScript==


(function() {
    'use strict';

    function setupImage() {
        if (window.location.href === 'https://liste.bdekraken.fr/place') {

            var canvas = document.getElementsByClassName("canvas svelte-1wet9f1");

            if (true) {
                var context = canvas[0].getContext('2d');

                var image = new Image();
                image.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/OverlayB2.png';

                image.onload = function() {
                    var x = (4080/255)*0;
                    var y = (4080/255)*5;

                    var newWidth = (4080/255)*255; 
                    var newHeight = (newWidth / image.width) * image.height; 

                    context.globalAlpha = '1'

                    context.drawImage(image, x, y, newWidth, newHeight);
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
