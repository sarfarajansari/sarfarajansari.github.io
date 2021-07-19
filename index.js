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
  let factor = window.innerWidth<=725?-5:0
  let paths = [
    Path(90+factor, 20),
    Path(90+factor,10),

    Path(0 + factor,40),
    Path(0 + factor,30),

    Path(90 + factor, 60),
    Path(90 + factor,50),

    Path(0 + factor,80),
    Path(0 + factor,70),

    Path(70, 90),
    Path(100,70)


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
        scrub:2,
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
  





