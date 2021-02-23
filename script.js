gsap.from("#modal1", {
  scrollTrigger: "#modal1",
  start: "top bottom",
  y: 100,
  pin:"#ghost",
  scrub: true,
  opacity:0,
});

gsap.from("#modal2", {
  scrollTrigger: "#modal2",
  start: "top bottom",
  y: 100,
  opacity:0,
});

