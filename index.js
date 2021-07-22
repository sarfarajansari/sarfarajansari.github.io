gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

let showpaths=[]

function animateTitle(words,id){
  let k=0
  words.split(" ").forEach((word,i)=>{

    word.split("").forEach((letter,j)=>{
      k++
      gsap.to("#word"+String(i)+"letter"+String(j),{
        scrollTrigger:{
          trigger:id,
          scrub:window.innerWidth<=725?1:1,
          start:`${(k*15) +50}px center`,
          // markers:true
        },
        duration:3,
        translateY:-700,
        delay:j,
        rotate:"90deg"
      })
      

    })
  })
}


document.addEventListener('DOMContentLoaded',()=>{
  function Path(x, y){
    var xpercent = window.innerWidth / 100;
    var h = document.getElementsByClassName("paper-plane-animation")[0].offsetHeight
    var ypercent =h/100
  
    return {
      x: x * xpercent,
      y: y *ypercent,
      opacity: 1,
    };
  };
  let factor = window.innerWidth<=725?-10:0
  let paths = [
    Path(90+factor, 20),
    Path(90+factor,10),

    Path(0 ,40),
    Path(0 ,30),

    Path(90 + factor, 60),
    Path(90 + factor,50),

    Path(0 ,80),
    Path(0 ,70),

    Path(70, 90),
    Path(100,70)
  ];
  showpaths=paths;

  
  function SingleScroll(){
    const flightPath = {
      path: paths,
      curviness: 1.25,
      autoRotate: true,
    };
  
  
    gsap.to("#paper-plane", {
      scrollTrigger: {
        trigger: "#trigger-element",
        scrub:window.innerWidth<=725?0.4:1,
        pin: true,
        // markers:true,
        
        
      },
      duration:window.innerWidth<=725?3:5,
      ease: "none",
      motionPath: flightPath,
    });
    console.log(window.innerHeight)
  };
  SingleScroll()
  animateTitle("MY LEARNING PATH","#path-title")



})








