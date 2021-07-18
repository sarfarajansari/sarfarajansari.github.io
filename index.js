gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function SingleScroll(props){
  let Path = props.path;
  const flightPath = {
    path: Path,
    curviness: 1.25,
    autoRotate: true,
  };
  if (props.n % 2 === 0) {
    Path.forEach((p, i) => {
      p.x = -p.x;
    });
  }

  gsap.to("#paper-plane" + String(props.n), {
    scrollTrigger: {
      trigger: "#container" + String(props.n),
      scrub: true,
      pin: true,
      start: "top top",
    },
    ease: "none",
    motionPath: flightPath,
  });
};
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

document.addEventListener('DOMContentLoaded',()=>{
    for(var i = 1; i <=6;i++) {
        SingleScroll({
            n:i,
            path:paths
        })
    }
})