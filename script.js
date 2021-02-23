gsap.to("#modal1", {
  scrollTrigger: {
    trigger: "#modal1",
    start: "top center",
    end: "bottom 200px",
    markers: true,
    y: 100,
    pin: true,
    scrub: true
  }
});

gsap.from("#modal2", {
  scrollTrigger: "#modal2",
  start: "top bottom",
  y: 100,
  opacity: 0
});
