gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function SingleScroll(){
  const flightPath = {
    path: "#path",
    curviness: 1.25,
    autoRotate: true,
  };


  gsap.to("#paper-plane", {
    scrollTrigger: {
      trigger: "#trigger-element",
      scrub: true,
      // pin: true,
      start: "-200px center",
      markers:true,
    },
    duration:3,
    ease: "none",
    motionPath: flightPath,
  });
};

document.addEventListener('DOMContentLoaded',()=>{
  SingleScroll()
})



function Path(x, y){
  var ypercent = 700 / 100;
  var xpercent = window.innerWidth / 100;

  return {
    x: x * xpercent,
    y: y * ypercent,
    opacity: 1,
  };
};
var p = Path(1,2);
let paths = [
  Path(10, 10),
  Path(20, 20),
  Path(30, 30),
  Path(40, 40),
  Path(50, 50),
  Path(60, 60),
  Path(70, 70),
  Path(80, 80),
  Path(90, 90),
  Path(100, 100),
];

