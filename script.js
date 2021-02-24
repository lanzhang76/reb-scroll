function scrollAction(t_id){
  let trigger = 
    {
      scroller: ".content",
      trigger: t_id,
      start: "top 500px",
      end: "bottom 100px",
      markers: true,
      pinSpacing: false,
      pin: true,
      scrub: true,
      onLeave: () => {
        gsap.to(t_id, {
          duration:0.2,
          opacity: 0
        });
      }
  }
    return trigger
}


gsap.fromTo(
  "#modal1",
  {
    opacity: 0
  },
  {
    scrollAction("#modal1"),
    opacity: 1
  }
);

gsap.fromTo(
  "#modal2",
  {
    opacity: 0
  },
  {
    scrollTrigger: {
      scroller: ".content",
      trigger: "#modal2",
      start: "top 500px",
      end: "bottom 100px",
      markers: true,
      pinSpacing: false,
      pin: true,
      scrub: true,
      onLeave: () => {
        gsap.to("#modal2", {
          duration:0.2,
          opacity: 0
        });
        console.log("leave");
      }
    },
    opacity: 1
  }
);
