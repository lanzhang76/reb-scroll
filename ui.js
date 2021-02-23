let button1 = document.getElementById("modals-button-section1");
let button2 = document.getElementById("modals-button-section2");
let button3 = document.getElementById("modals-button-section3");

const overlay = {
  in: { duration: 0.2, height: 90 },
  out: { duration: 0.2, height: 0 }
};
const buttonJump = { y: -2 };
const caretZoom = { in: { duration: 1, x: 4 }, out: { duration: 0.6, x: -4 } };

button1.addEventListener("mouseenter", function(event) {
  gsap.to(button1, buttonJump);
  gsap.to("#button-effect1", overlay.in);
  gsap.to("#caret1", caretZoom.in);
});

button1.addEventListener("mouseleave", function(event) {
  gsap.to(button1, { y: 0 });
  gsap.to("#button-effect1", overlay.out);
  gsap.to("#caret1", caretZoom.out);
});

button2.addEventListener("mouseenter", function(event) {
  gsap.to(button2, buttonJump);
  gsap.to("#button-effect2", {
    duration: 0.2,
    height: 90,
    transformOrigin: "50% bottom"
  });
  gsap.to("#caret2", caretZoom.in);
});

button2.addEventListener("mouseleave", function(event) {
  gsap.to(button2, { y: 0 });
  gsap.to("#button-effect2", { duration: 0.2, height: 0 });
  gsap.to("#caret2", caretZoom.out);
});

button3.addEventListener("mouseenter", function(event) {
  gsap.to(button3, buttonJump);
  gsap.to("#button-effect3", { duration: 0.2, height: 90 });
  gsap.to("#caret3", caretZoom.in);
});

button3.addEventListener("mouseleave", function(event) {
  gsap.to(button3, { y: 0 });
  gsap.to("#button-effect3", { duration: 0.2, height: 0 });
  gsap.to("#caret3", caretZoom.out);
});
