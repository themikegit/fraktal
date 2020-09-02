$(document).ready(function() {
 $("button").click(function() {
  alert("hello");
 });
});
//typed.js
let typed = new Typed(".type", {
 strings: ["very predictive", "new now with us"],
 typeSpeed: 40,
 backSpeed: 20,
 autoInsertCss: true,
 loop: true
});

//anime.js
anime({
 targets: "div.graphic",
 translateY: [
  { value: 20, duration: 13200 },
  { value: 0, duration: 11200 }
 ],
 translateX: [
  { value: -20, duration: 13200 },
  { value: 0, duration: 13200 }
 ],
 scale: [
  { value: 1.1, duration: 13200 },
  { value: 1, duration: 13200 }
 ],
 loop: true
});

// anime({
//  targets: "button",
//  opacity: [{ value: 0 }, { value: 1, duration: 6000 }],
//  translateY: [{ value: 10 }, { value: 0, duration: 6000 }]
// });
