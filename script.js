// initation
gsap.fromTo(".bg", { duration: 3, scale: 1.5 }, { scale: 1.1 });
gsap.from("#apple", { duration: 2, scale: 0.95 });
const leaftl = gsap
  .timeline()
  .from(".animate-leaf", { duration: 2, scale: 0.5, opacity: 0, x: -10 })
  .to(".animate-leaf", { duration: 2, scale: 1,x: 10, y: 2 })
  .to(".animate-leaf", { duration: 4, x: -10, y: 0 }, "-=4");

// mouse-based movements //
var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

$("body").mousemove(function(e) {
  // console.log(e.pageX,e.pageY);
  var xDiff = e.pageX - centerX;
  var yDiff = e.pageY - centerY;
  var mapped_xDiff = map(xDiff, -600, 600, 1.09, 1);

  // bg movement
  gsap.to(".bg", { scale: mapped_xDiff });

  // apple movement
  var apple_xDiff = map(xDiff, -600, 600, 3, -3);
  var apple_yDiff = map(yDiff, -800, 800, 3, -3);
  gsap.to("#apple", { y: apple_xDiff, x: apple_yDiff });
});
