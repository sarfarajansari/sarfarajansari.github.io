import React,{ useState,useEffect} from 'react';
import "./path.css";
import PaperImage from "./paper.png";
import Datestr from './date/date';
import data from "./data"
import Detail from "./details/detail"

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const LearningPath = () => {
  const [active, setactive] = useState(-1);
  const [achievements, setachievements] = useState([]);
  const right = [1,2,5,6]
  const forceUpdate =useForceUpdate()

  useEffect(() => {
    let factor = window.innerWidth<=725?-10:0
    let paths = [
      Path(95+factor, 20),
      Path(95+factor,10),
  
      Path(0 ,40),
      Path(0 ,30),
  
      Path(95 + factor, 60),
      Path(95 + factor,50),
  
      Path(0 ,80),
      Path(0 ,70),
    ];

    paths.forEach((p,i)=>{
      p.active = false;
      p.title = data[i].title
      p.date = data[i].date
      p.img=data[i].img
      p.detail = data[i].detail

    })
    setachievements(paths)

    setInterval(forceUpdate,10)
    let plane = document.getElementById("paper-plane")
    let parent =plane.offsetParent
    let rect = plane.getBoundingClientRect()
    
    let y = ( rect.y-parent.getBoundingClientRect().y)+(rect.height/2)
    let x = plane.getBoundingClientRect().x +(rect.width/2)

    window.onscroll=()=>{
      rect = plane.getBoundingClientRect()
      y = ( rect.y-parent.getBoundingClientRect().y) + rect.height/2
      x = plane.getBoundingClientRect().x +(rect.width/2)
      let achie = achievements.length===0?paths:achievements
      let fFactor = window.innerWidth/24
      achie.forEach((c)=>{
        if(c.x<=x+fFactor &&  c.y<=y+fFactor ){
          c.active=true

        }
      })
      setachievements(achie)
      document.getElementById("details").style.top="-100%";
      setactive(-1)

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

  const pullDetail=(i)=>{
    document.getElementById("details").style.top=0;
    setactive(i)
  }
  return (
    <div id="trigger-element" className="paper-plane-animation">
      <img
        unselectable="on"
        id={"paper-plane"}
        className="paper-plane unselectable"
        src={PaperImage}
        alt="paperplane"
      />
      
      <div className="details" id="details">
          <Detail body={achievements[active]}/>
      </div>

      <>
          {achievements.map((a,i)=>{
            let classname =a.active?"arrow active right arrow" + String(i):"arrow right arrow" + String(i);
            classname = i===active?classname + " detail":classname;
            
            return(
              <>
                  {right.includes(i+1)?<>
                    <div  className={classname} style={{position:"absolute",top:String(a.y )+"px"}}>
                      <Datestr onclick={()=>pullDetail(i)}  date={a.date} type={"right"} />
                    </div>
                    </>:<>
                    <div className={classname.replace("right","left")} style={{position:"absolute",top:String(a.y )+"px"}}>
                      <Datestr onclick={()=>pullDetail(i)} date={a.date} type={"left"} />
                    </div>
                    </>}

              </>
            )
          })}
      </>

    </div>
  );
};

export default LearningPath;

