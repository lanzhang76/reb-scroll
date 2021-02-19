let init = true;

function init() {
  // initation
    gsap.fromTo(".bg", { duration: 3, scale: 1.5 }, { scale: 1.2 });
    gsap.from("#apple", { duration: 4, scale: 0.95 });
    gsap.from(".animate-leaf", {
      duration: 2,
      scale: 0.5,
      opacity: 0.3,
      x: 0,
      y: "-=3",
      transformOrigin: "50% top"
    });
    const leaftl = gsap
      .timeline()
      .to(
        ["#animate-leaf-bottom"],
        { duration: 2, x: "+=15", y: "+=15" },
        "-=0.5"
      )
      .to(["#animate-leaf-left"], { duration: 2, x: "-=5", y: "+=05" }, "-=0.5")
      .to(["#animate-leaf-left"], { duration: 2, x: 0, y: 0 });
    init = false;
}

function animate(){
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

      // leaves movement
      var apple_xDiff = map(xDiff, -600, 600, 5, -5);
      var apple_yDiff = map(yDiff, -800, 800, 5, -5);
      gsap.to(".animate-leaf", { y: apple_yDiff, x: apple_xDiff });
}

                        
setTimeInterval(1000,function(){
                              
if(init==true){
      init()
} else {
  animate();
}
    })                       


