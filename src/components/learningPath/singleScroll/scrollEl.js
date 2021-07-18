import React,{useEffect, useState} from 'react';
import "./scroll.css";
import PaperImage from '../paper.png';
import gsap from 'gsap';
import {Power1} from "gsap/gsap-core";
import {MotionPathPlugin} from "gsap/MotionPathPlugin"
import { ScrollTrigger } from 'gsap/all';



// ID,path
const SingleScroll = (props) => {
    const [Path, setstate] = useState(props.path)
    
    useEffect(() => {
        const flightPath ={
            path:Path, 
            curviness: 1.25,
            autoRotate: true,
            
          }

        if(props.n%2===0){

            Path.forEach((p, i) =>{
                p.x=-p.x
            })
        }

        gsap.registerPlugin(MotionPathPlugin,ScrollTrigger)

        gsap.to("#paper-plane" +String(props.n),{
            scrollTrigger:{
                trigger:"#container" +String(props.n),
                scrub:true,
                // markers:true,
                pin:true,
                start:"top top",
                onComplete:()=>console.log("components")
            },
            ease:"none",
            motionPath:flightPath, 
        })
        
    }, [])









    return (
        <div id={"container" +String(props.n)} className="single-scroll" style={{height:"700px"}}>
            <img id={"paper-plane" +String(props.n)} className="paper-plane" src={PaperImage} alt="paperplane"/>
        </div>
    );
}

export default SingleScroll;
