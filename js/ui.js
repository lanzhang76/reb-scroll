let button1 = document.getElementById("hcp-button");
let buttonA = document.getElementById("modals-button-section1A");
let buttonB = document.getElementById("modals-button-section1B");
let button2 = document.getElementById("modals-button-section2");
let button3 = document.getElementById("modals-button-section3");

const overlay = {
  in: { duration: 0.2, height: 90 },
  out: { duration: 0.2, height: 0 },
};
const buttonJump = { y: -2 };
const caretZoom = { in: { duration: 1, x: 4 }, out: { duration: 0.6, x: -4 } };

button1.addEventListener("mouseenter", function (event) {
  gsap.to(button1, buttonJump);
  gsap.to("#hcp-caret", caretZoom.in);
});

button1.addEventListener("mouseleave", function (event) {
  gsap.to(button1, { y: 0 });
  gsap.to("#hcp-caret", caretZoom.out);
});

buttonA.addEventListener("mouseenter", function (event) {
  gsap.to(buttonA, buttonJump);
  gsap.to("#effectA", {
    duration: 0.2,
    height: 90,
    transformOrigin: "50% bottom",
  });
  gsap.to("#caretA", caretZoom.in);
});

buttonA.addEventListener("mouseleave", function (event) {
  gsap.to(buttonA, { y: 0 });
  gsap.to("#effectA", { duration: 0.2, height: 0 });
  gsap.to("#caretA", caretZoom.out);
});

buttonB.addEventListener("mouseenter", function (event) {
  gsap.to(buttonB, buttonJump);
  gsap.to("#effectB", {
    duration: 0.2,
    height: 90,
    transformOrigin: "50% bottom",
  });
  gsap.to("#caretB", caretZoom.in);
});

buttonB.addEventListener("mouseleave", function (event) {
  gsap.to(buttonB, { y: 0 });
  gsap.to("#effectB", { duration: 0.2, height: 0 });
  gsap.to("#caretB", caretZoom.out);
});

button2.addEventListener("mouseenter", function (event) {
  gsap.to(button2, buttonJump);
  gsap.to("#effect2", {
    duration: 0.2,
    height: 90,
    transformOrigin: "50% bottom",
  });
  gsap.to("#caret2", caretZoom.in);
});

button2.addEventListener("mouseleave", function (event) {
  gsap.to(button2, { y: 0 });
  gsap.to("#effect2", { duration: 0.2, height: 0 });
  gsap.to("#caret2", caretZoom.out);
});

button3.addEventListener("mouseenter", function (event) {
  gsap.to(button3, buttonJump);
  gsap.to("#effect3", { duration: 0.2, height: 90 });
  gsap.to("#caret3", caretZoom.in);
});

button3.addEventListener("mouseleave", function (event) {
  gsap.to(button3, { y: 0 });
  gsap.to("#effect3", { duration: 0.2, height: 0 });
  gsap.to("#caret3", caretZoom.out);
});
