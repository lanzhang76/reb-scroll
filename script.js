gsap.to("#modal1", {
  scrollTrigger: {
    trigger: "#modal1",
    start: 'top center',
    end: 'bottom 150px',
    markers: true,
    // pin: "#modal1",
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
