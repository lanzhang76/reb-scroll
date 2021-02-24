gsap.to("#modal1", {
  scrollTrigger: {
    trigger: "#modal1",
    start: 'top 200px',
    end: 'bottom 10px',
    markers: true,
    // pinSpacing: false,
    pin: true,
    // scrub: true
  },
  y: -100,
});

// gsap.from("#modal2", {
//   scrollTrigger: "#modal2",
//   start: "top bottom",
//   y: 100,
//   opacity: 0
// });
