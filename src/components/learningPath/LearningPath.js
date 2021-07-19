import React,{ useState,useEffect,useRef} from 'react';
import "./path.css";
import PaperImage from "./paper.png";
import {BsFillFlagFill} from "react-icons/bs"

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const LearningPath = () => {
  const [Circles, setCircles] = useState([]);
  const [achievements, setachievements] = useState([]);
  const forceUpdate =useForceUpdate()

  useEffect(() => {
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
    ];

    paths.forEach((p)=>{
      p.title=""
      p.active = false;
    })
    setachievements(paths)

    setInterval(forceUpdate,10)
    let plane = document.getElementById("paper-plane")
    let parent =plane.offsetParent
    let rect = plane.getBoundingClientRect()
    
    let y = ( rect.y-parent.getBoundingClientRect().y)+(rect.height/2)
    let x = plane.getBoundingClientRect().x +(rect.width/2)

    let first={
      x:x,
      y:y,
      r:2
    }
    setCircles([first])
    window.onscroll=()=>{
      rect = plane.getBoundingClientRect()
      y = ( rect.y-parent.getBoundingClientRect().y) + rect.height/2
      x = plane.getBoundingClientRect().x +(rect.width/2)
      let f = Circles.filter((c)=>c.x<=x+7 && c.x>=x-7 && c.y<=y+7 && c.y>=y-7)
      if(f.length===0 && window.innerWidth>=725){
        let c = Circles
        c.push({
          x:x,
          y:y,
          r:2
        })
        setCircles(c)
      }


      let achie = achievements.length===0?paths:achievements
      let fFactor = window.innerWidth/24
      achie.forEach((c)=>{
        if(c.x<=x+fFactor &&  c.y<=y+fFactor ){
          c.active=true

        }
      })
      setachievements(achie)
    }


    
  }, []);

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
  return (
    <div id="trigger-element" className="paper-plane-animation">
      <img
        id={"paper-plane"}
        className="paper-plane"
        src={PaperImage}
        alt="paperplane"
      />


      <svg className="circle-svg" height={"100vh"} width={"100vw"}>
        {Circles.map((circle)=>{
            return <circle cx={circle.x} cy={circle.y} r={circle.r}/>
          })}
      </svg>
      <>
          {achievements.map((a,i)=>{
            return <div className={a.active?"flag active flag" + String(i):"flag flag" + String(i)} style={{position:"absolute",top:String(a.y )+"px",left:String(a.x )+"px"}}><BsFillFlagFill /></div>
          })}
      </>

    </div>
  );
};

export default LearningPath;

const Path = (x, y) => {
  let ypercent = 700 / 100;
  let xpercent = window.innerWidth / 100;

  return {
    x: x * xpercent,
    y: y * ypercent,
    opacity: 1,
  };
};
