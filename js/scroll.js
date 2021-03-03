let content = document.querySelector(".content");
let slide = document.querySelector("#deck-slide");
let total = 174;
let currentSlide = "001";
let num, y;
let height = 1165;
let startPoint = 295 + 150;
let cta_height = 300;
let animate_duration = 0.3;
let modals = document.querySelector(".modals");

content.addEventListener("scroll", function (e) {
  y = content.scrollTop;
  num = Math.floor(map(y, 0, height, 1, total));
  currentSlide = num.toString();

  // console.log(y, currentSlide);
  console.log(y);

  if (y > 40) {
    gsap.to(".box", { duration: 1, opacity: 0 });
  }

  if (y >= 405) {
    gsap.to("#headline", { opacity: 0, duration: 0.5 });
  } else {
    gsap.to("#headline", { opacity: 1, duration: 0.5 });
  }
  if (y < startPoint) {
    gsap.to("#modal1", { opacity: 1, duration: animate_duration });
  } else if (y >= startPoint && y <= startPoint + cta_height) {
    gsap.to("#modal1", { opacity: 0, duration: animate_duration });
    gsap.to("#modal2", { opacity: 1, duration: animate_duration });
  } else if (y >= startPoint + cta_height && y < startPoint + cta_height * 2) {
    gsap.to("#modal2", { opacity: 0, duration: animate_duration });
    gsap.to("#modal3", { opacity: 1, duration: animate_duration });
  } else if (y > startPoint + cta_height * 2) {
    gsap.to("#modal3", { opacity: 0, duration: animate_duration });
  }

  slide.src = `frames/frame-${currentSlide}.jpg`;
});

// gsap.to("#modal1", {
//   scrollTrigger: {
//     trigger: "#modal1",
//     scroller: ".content",
//     start: "center 50%",
//     end: "+=500",
//     markers: true,
//     pin: true,
//   },
//   // onUpdate: (self) => console.log("progress:", self.progress),
//   // duration: 1,
//   // opacity: 0,
// });
