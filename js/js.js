$(document).ready(function () {
	$(".mobile-panel").css("display", "none");
	$("button").click(function () {
		alert("hello");
	});
	$("#nav-icon").click(function () {
		$(this).toggleClass("open");
		$(".mobile-panel").fadeToggle(200);
		$("body").toggleClass("lock-scroll");
	});
});
//typed.js;
let typed = new Typed(".type", {
	strings: ["low fee", "UX optimised", "cross chain"],
	typeSpeed: 40,
	backSpeed: 20,
	autoInsertCss: true,
	loop: true,
});
//init wow
new WOW().init();

anime.js;
anime({
	targets: "img.static",
	translateY: 15,
	duration: 5000,
	direction: "alternate",
	easing: "cubicBezier(.5, .05, .1, .3)",
	loop: true,
});

anime({
	targets: "img.cube",
	translateY: 20,
	duration: 5000,
	direction: "alternate",
	easing: "cubicBezier(.5, .05, .1, .3)",
	loop: true,
});

anime({
	targets: "img.cubeShadow",
	scale: 1.2,
	translateX: -10,
	easing: "cubicBezier(.5, .05, .1, .3)", 
	duration: 5000,
	direction: "alternate",
	loop: true,
});

anime({
	targets: "img.phone2",
	translateY: 10,
	duration: 5000,
	direction: "alternate",
	easing: "cubicBezier(.5, .05, .1, .3)",
	loop: true,
});

anime({
	targets: "img.phoneSet2",
	scaleX: [
		{ value: 1, easing: "cubicBezier(.5, .05, .1, .3)", duration: 5000 },
	],
	duration: 5000,
	direction: "alternate",
	loop: true,
});