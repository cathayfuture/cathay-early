$(function () {
	AOS.init({
		duration: 1000,
		once: true
	});

	particlesJS.load('particles-js', '/js/particles.config.json');

	/**
	 * https://github.com/istvan-ujjmeszaros/bootstrap-autohidingnavbar
	 */
	$('.navbar.fixed-top').autoHidingNavbar({
		showOnUpscroll: false,
		showOnBottom: false
	});
});

var loadDeferredStyles = function () {
	var addStylesNode = document.getElementById('deferred-styles');
	var replacement = document.createElement('div');
	replacement.innerHTML = addStylesNode.textContent;
	document.body.appendChild(replacement);
	addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf =
	window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame;
if (raf)
	raf(function () {
		window.setTimeout(loadDeferredStyles, 0);
	});
else window.addEventListener('load', loadDeferredStyles);