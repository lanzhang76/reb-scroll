// // INITIATE
// gsap.set(".exp-button", { scale: 0.9 });
// gsap.set(".exp-button-el", { scale: 0 });
// gsap.set("#exp-leaf-1", { x: 15, y: -8, rotation: 38 });
// gsap.set("#exp-leaf-2", { x: -15, y: 8, rotation: -38 });
// gsap.set("#exp-flower-1", { x: 15, y: 8, rotation: 38 });
// gsap.set("#exp-flower-2", { x: -15, y: -8, rotation: -38 });

// // ANIMATE
// let expTL = gsap
//   .timeline({ repeat: -1, yoyp: true })
//   .to([".exp-button", ".exp-button-el"], {
//     duration: 1.5,
//     scale: 1,
//     opacity: 1,
//     x: 0,
//     y: 0,
//     rotation: 0,
//   })
//   .to(".exp-button-effect", { opacity: 1 }, "-=1")
//   .addLabel("stay")
//   .to([".exp-button", ".exp-button-el"], {
//     duration: 1,
//     scale: 1,
//     opacity: 1,
//   })
//   .addLabel("return")
//   .to([".exp-button"], {
//     duration: 1,
//     scale: 0.9,
//   })
//   .to("#exp-leaf-1", { x: 15, y: -8, rotation: 38 }, "-=1")
//   .to("#exp-leaf-2", { x: -15, y: 8, rotation: -38 }, "-=1")
//   .to("#exp-flower-1", { x: 15, y: -8, rotation: 38 }, "-=1")
//   .to("#exp-flower-2", { x: -15, y: 8, rotation: -38 }, "-=1")
//   .to([".exp-button-effect", ".exp-button-el"], { opacity: 0 }, "-=1");
