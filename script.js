let initiate = true;

function initAnimation() {
  // initation
  // gsap.fromTo("#bg-img", { duration: 4, scale: 2.2,delay:2 }, { scale: 1.3 });
  gsap.set([".branch-bud", "#branch-apple"], { scale: 0.98, x: 3, y: 0 });
  const branchtl = gsap
    .timeline()
    .fromTo(
      ".branch",
      { scale: 1.3, x: -800, y: 10, duration: 2, rotation: "-=12" },
      { autoAlpha: 1, x: 0, y: -20, scale: 1, duration: 2, rotation: 0 }
    )
    .to(
      [".branch-bud", "#branch-apple"],
      { duration: 3, scale: 1, x: 0, y: 0 },
    );

  // .fromTo(
  //   ".branch",
  //   {
  //     duration: 2,
  //     scale: 2,
  //     x: 15,
  //     y: 5,
  //     transformOrigin: "0% 0%",
  //     rotation: "-=2"
  //   }
  // )
  //   .to(".branch", { duration: 0.5, y: -1 })
  //   .to(".branch", { duration: 0.5, y: 1 })
  //   .to(".branch", { duration: 0.5, y: 0, ease: "bounce.out" });
  // const elementtl = gsap
  //   .timeline()
  //   .from(".branch-bud", { duration: 1, opacity: 0, scale: 0.95 })
  //   .to("#branch-apple", { duration: 1, x: -10, y: -4, scale: 1.02 });

  initiate = false;
}

function animate() {
  // mouse-based movements //
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;

  $("body").mousemove(function(e) {
    // console.log(e.pageX,e.pageY);
        var xDiff = e.pageX - centerX;
        var yDiff = e.pageY - centerY;
        var mapped_xDiff = map(xDiff, -800, 800, 1.02, 1);
    //     // bg movement
        gsap.to(".bg", { scale: mapped_xDiff, transformOrigin: "50% 50%" });
    //     //branch
    //     var apple_yDiff = map(yDiff, -800, 800, 3, -3);
    //     // gsap.to(".branch", { y:apple_yDiff});
    //     // apple movement
    //     var apple_xDiff = map(xDiff, -600, 600, 1, -2);
    //     var apple_yDiff = map(yDiff, -800, 800, 0.5, -0.5);
    // gsap.to("#branch-apple", { y: apple_xDiff, rotation: apple_yDiff});
  });

  //button
}

initAnimation();

setTimeout(animate(), 5000);
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
