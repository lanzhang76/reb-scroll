let stage = 1;
var falling = true;
var container = document.getElementById("animate-components"),
  w = window.innerWidth,
  h = window.innerHeight;
gsap.set("#animate-components", { perspective: 600 });

  var total = 2;
  for (let i = 0; i < total; i++) {
    var Div = document.createElement("div");
    gsap.set(Div, {
      attr: { class: "dot" },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200)
    });
    container.append(Div);
    animm(Div);
  }

 var total = 2;
  for (let i = 0; i < total; i++) {
    var Div = document.createElement("div");
    gsap.set(Div, {
      attr: { class: "dot-blur" },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200)
    });
    container.append(Div);
    animm(Div);
  }

function animm(elm) {
  gsap.to(elm, R(15, 25), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15
  });
  gsap.to(elm, R(4, 8), {
    x: "+=100",
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut
  });
  gsap.to(elm, R(2, 8), {
    rotationX: R(0, 360),
    rotationY: R(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5
  });
}

function R(min, max) {
  return min + Math.random() * (max - min);
}
