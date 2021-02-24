function scrollAction(t_id) {
  let trigger = {
    scroller: ".content",
    trigger: t_id,
    start: "top 500px",
    end: "bottom 100px",
    // markers: true,
    pinSpacing: false,
    pin: true,
    scrub: true,
    onLeave: () => {
      gsap.to(t_id, {
        duration: 0.2,
        opacity: 0
      });
    }
  };
  return trigger;
}

gsap.fromTo(
  "#modal1",
  {
    opacity: 0
  },
  {
    scrollTrigger: scrollAction("#modal1"),
    opacity: 1
  }
);

gsap.fromTo(
  "#modal2",
  {
    opacity: 0
  },
  {
    scrollTrigger: scrollAction("#modal2"),
    opacity: 1
  }
);
