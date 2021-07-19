gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function Path(x, y){
  var xpercent = 720 / 100;

  return {
    x: x * xpercent,
    y: y ,
    opacity: 1,
  };
};
let paths = [
  Path(0, 350),
  Path(0, 700),
  Path(0, 1050),
  Path(0, 1400),
  Path(0, 1750),
  Path(0,2100),
];

function SingleScroll(){
  const flightPath = {
    path: paths,
    curviness: 1.25,
    autoRotate: true,
  };


  gsap.to("#paper-plane", {
    scrollTrigger: {
      trigger: "#trigger-element",
      scrub:true,
      // pin: true,
      start: "top top",
      // markers:true,
    },
    ease: "none",
    motionPath: flightPath,
  });
  console.log(window.innerHeight)
};

document.addEventListener('DOMContentLoaded',()=>{
  SingleScroll()
})


const config ={
    "720":{
    scrub:true,
    duration:3,
    start: "-200px center",
    end:"default"
  }}
  





