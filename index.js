gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);



document.addEventListener('DOMContentLoaded',()=>{
  function Path(x, y){
    var xpercent = window.innerWidth / 100;
    var h = document.getElementsByClassName("paper-plane-animation")[0].offsetHeight
    ypercent =h/100
  
    return {
      x: x * xpercent,
      y: y *ypercent,
      opacity: 1,
    };
  };
  let paths = [
    Path(90, 20),
    Path(90,10),

    Path(0,30),
    Path(0,20),

    Path(90, 40),
    Path(90,30),

    Path(0,50),
    Path(0,20),

    Path(90, 60),
    Path(90,40),

    Path(0,70),
    Path(0,50),

    Path(90, 80),
    Path(90,60),

    Path(0,90),
    Path(100,70),

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
        scrub:5,
        pin: true,
        // markers:true,
      },
      duration:10,
      ease: "none",
      motionPath: flightPath,
    });
    console.log(window.innerHeight)
  };
  SingleScroll()
})


const config ={
    "720":{
    scrub:true,
    duration:3,
    start: "-200px center",
    end:"default"
  }}
  





