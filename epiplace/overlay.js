// ==UserScript==
// @name         Epiplace Overlay
// @namespace    https://github.com/ilil2/B2-Overlay
// @version      1.0
// @description  Ban?
// @author       WarpGates Studio
// @match        http://localhost:8080/*
// @grant        none
// @icon         https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/image.png
// @updateURL    https://raw.githubusercontent.com/ilil2/B2-Overlay/main/epiplace/overlay.js
// @downloadURL  https://raw.githubusercontent.com/ilil2/B2-Overlay/main/epiplace/overlay.js
// ==/UserScript==


(function () {
    'use strict';

    function setupImage() {
        var canvas = document.getElementsByClassName("Canvas");

        if (true) {
            var context = canvas[0].getContext('2d');

            var image = new Image();
            image.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/epiplace/theophile-johnson.png';

            image.onload = function () {
                var x = 27;
                var y = 34;

                var newWidth = 20;
                var newHeight = (newWidth / image.width) * image.height;

                image.style.opacity = '0.5';

                context.drawImage(image, x, y, newWidth, newHeight);
            };
        }
    }
    setTimeout(function () {
        setupImage();
    }, 2500);
    setInterval(function () {
        setupImage();
    }, 10);
})();
