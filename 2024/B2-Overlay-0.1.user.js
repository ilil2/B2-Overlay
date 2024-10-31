// ==UserScript==
// @name         krak Overlay 2024
// @namespace    https://github.com/ilil2/B2-Overlay
// @version      0.5
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
                var image3 = new Image();
                image3.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/asterix-3px.png';
                var image4 = new Image();
                image4.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/qr-rick-3px.png';
                var image5 = new Image();
                image5.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/epita-3px.png';
                var image6 = new Image();
                image6.src = 'https://raw.githubusercontent.com/ilil2/B2-Overlay/main/2024/getfdn-3px.png';

                image.onload = function() {
                    var x = (4080/255)*218;
                    var y = (4080/255)*208;
                    var x2 = (4080/255)*100;
                    var y2 = (4080/255)*100;
                    var x3 = (4080/255)*45;
                    var y3 = (4080/255)*110;
                    var x4 = (4080/255)*45;
                    var y4 = (4080/255)*190;
                    var x5 = (4080/255)*20;
                    var y5 = (4080/255)*2;
                    var x6 = (4080/255)*91;
                    var y6 = (4080/255)*173;

                    var newWidth = (4080/255)*22;
                    var newHeight = (newWidth / image.width) * image.height;
                    var newWidth2 = (4080/255)*47;
                    var newHeight2 = (newWidth2 / image2.width) * image2.height;
                    var newWidth3 = (4080/255)*22;
                    var newHeight3 = (newWidth3 / image3.width) * image3.height;
                    var newWidth4 = (4080/255)*31;
                    var newHeight4 = (newWidth4 / image4.width) * image4.height;
                    var newWidth5 = (4080/255)*44;
                    var newHeight5 = (newWidth5 / image5.width) * image5.height;
                    var newWidth6 = (4080/255)*41;
                    var newHeight6 = (newWidth6 / image6.width) * image6.height;

                    context.globalAlpha = '1'

                    context.drawImage(image, x, y, newWidth, newHeight);
                    context.drawImage(image2, x2, y2, newWidth2, newHeight2);
                    context.drawImage(image3, x3, y3, newWidth3, newHeight3);
                    context.drawImage(image4, x4, y4, newWidth4, newHeight4);
                    context.drawImage(image5, x5, y5, newWidth5, newHeight5);
                    context.drawImage(image6, x6, y6, newWidth6, newHeight6);
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
