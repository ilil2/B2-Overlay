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

// options
let OVERLAY_IMAGE = "https://github.com/ilil2/B2-Overlay/blob/main/image.png";
let CANVAS_SIZE = [255, 255];
let MIN_ZOOM_LEVEL = 0.2; // minimum zoom level to display overlay

// create the overlay image
const overlayImage = new Image();
const overlayStyles = {
	position: "absolute",
	imageRendering: "pixelated",
	width: CANVAS_SIZE[0] + "px",
	height: CANVAS_SIZE[1] + "px",
	pointerEvents: "none",
};

for (let rule in overlayStyles) overlayImage.style[rule] = overlayStyles[rule];
overlayImage.src = OVERLAY_IMAGE;

// make the overlay togglable
let displayOverlay = true;
document.addEventListener("keypress", (e) => {
	if (e.code.toLowerCase() != "space") return;
	displayOverlay = !displayOverlay;
	overlayImage.style.display = displayOverlay ? "block" : "none";
});

window.addEventListener("load", () => {
	// add the overlay to the page
	let overlayParent = document.querySelector("#canvparent1"); // hijacking the snoo for our overlay

	overlayParent.style.zIndex = "4";
	overlayParent.append(overlayImage);

	// intercept position/scale changes
	let oldPos = pos;
	pos = () => {
		oldPos(); // do the normal things

		if (localStorage.z < MIN_ZOOM_LEVEL / 5) overlayImage.style.display = "none";
		else if (displayOverlay) overlayImage.style.display = "block";
	};
});
