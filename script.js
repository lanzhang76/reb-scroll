gsap.fromTo(
  "#modal1",
  {
    opacity: 0
  },
  {
    scrollTrigger: {
      scroller: ".content",
      trigger: "#modal1",
      start: "top 400px",
      end: "bottom 100px",
      markers: true,
      pinSpacing: false,
      pin: true,
      scrub: true
    },
    opacity: 1
  }
);

// gsap.from("#modal2", {
//   scrollTrigger: "#modal2",
//   start: "top bottom",
//   y: 100,
//   opacity: 0
// });
