// bg animation
gsap.from(".bg",{scale:1.2})

var centerX = window.innerWidth / 2;
var centerY= window.innerHeight / 2;

$("body").mousemove(function(e) {
    // console.log(e.pageX,e.pageY);
  var xDiff = e.pageX-centerX;
  var mapped_xDff = map(xDiff,-)
})
