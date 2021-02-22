let initiate = true;

function initAnimation() {
  // initation
  gsap.fromTo(".bg", { duration: 5, scale: 2.2 }, { scale: 1.3 });
  gsap.from("#apple", { duration: 4, scale: 0.95 });
  gsap.from(".animate-leaf", {
    duration: 2,
    scale: 0.5,
    opacity: 0.3,
    x: 0,
    y: "-=3",
    transformOrigin: "50% top"
  });
  gsap.from(".animate-flower", {
    duration: 5,
    scale: 0.8,
    opacity: 0.8,
    rotate: "-=25",
    transformOrigin: "50% 50%"
  });
  gsap.from(".animate-bud", {
    duration: 5,
    scale: 1.2,
    opacity: 0.8,
    rotate: "+=25",
    transformOrigin: "50% 50%"
  });

  const leaftl = gsap
    .timeline()
    .to(
      ["#animate-leaf-bottom"],
      { duration: 2, x: "-=15", y: "+=15" },
      "-=0.5"
    )
    .to(["#animate-leaf-bottom"], { duration: 2, x: 0, y: 0 })
    .to(["#animate-leaf-left"], { duration: 2, x: "-=5", y: "+=5" }, "-=0.5")
    .to(["#animate-leaf-left"], { duration: 2, x: 0, y: 0 })
    .to(["#animate-leaf-right"], { duration: 2, x: "-=10", y: "-=5" }, "-=1")
    .to(["#animate-leaf-top"], { duration: 2, rotate: "+=3" }, "-=2");

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
    var mapped_xDiff = map(xDiff, -800, 800, 1.09, 1);

    // bg movement
    gsap.to(".bg", { scale: mapped_xDiff });

    // apple movement
    var apple_xDiff = map(xDiff, -600, 600, 3, -3);
    var apple_yDiff = map(yDiff, -800, 800, 3, -3);
    gsap.to("#apple", { y: apple_xDiff, x: apple_yDiff });

    // leaves movement
    var apple_xDiff = map(xDiff, -600, 600, 5, -5);
    var apple_yDiff = map(yDiff, -800, 800, 2, -2);
    gsap.to(".animate-leaf", { y: apple_yDiff, x: apple_xDiff });

    // flowers
    gsap.to("#animate-flower-mid", { rotate: "+=" + apple_xDiff * 0.3 });
    gsap.to("#animate-flower-bot", { rotate: "+=" + apple_yDiff * 0.8 });
  });

  //button
}

initAnimation();
setTimeout(animate(), 5000);
let button1 = document.getElementById("modals-button-section1");
let button2 = document.getElementById("modals-button-section2");
let button3 = document.getElementById("modals-button-section3");
button1.addEventListener("mouseenter", function(event) {
  gsap.to("#button-effect1",{duration:0.2,height:60,transformOrigin:"50% bottom"});
});

button1.addEventListener("mouseleave", function(event) {
  gsap.to("#button-effect1",{duration:0.2,height:0,transformOrigin:"0% 0%"});
});

button2.addEventListener("mouseenter", function(event) {
  gsap.to("#button-effect2",{duration:0.2,height:60,transformOrigin:"50% bottom"});
});

button2.addEventListener("mouseleave", function(event) {
  gsap.to("#button-effect2",{duration:0.2,height:0,transformOrigin:"0% 0%"});
});

button3.addEventListener("mouseenter", function(event) {
  gsap.to("#button-effect3",{duration:0.2,height:60,transformOrigin:"50% bottom"});
});

button3.addEventListener("mouseleave", function(event) {
  gsap.to("#button-effect3",{duration:0.2,height:0,transformOrigin:"0% 0%"});
});