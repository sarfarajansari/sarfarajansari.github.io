import React,{useEffect,useRef} from 'react';
import "./path.css";
import PaperImage from './paper.png';
import gsap from 'gsap';
import {Power1} from "gsap/gsap-core";
import {MotionPathPlugin} from "gsap/MotionPathPlugin"
import { ScrollTrigger } from 'gsap/all';
import SingleScroll from './singleScroll/scrollEl'




const LearningPath = () => {

    const Path=(x,y)=>{
        let ypercent = 700/100 
        let xpercent = window.innerWidth/100 

        return {
            x:x*xpercent,
            y:y*ypercent,
            opacity:1
        }
    }

    return (
        <div className="paper-plane-animation">
            <SingleScroll n={1} path={[Path(10,10),Path(20,20),Path(30,30),Path(40,40),Path(50,50),Path(60,60),Path(70,70),Path(80,80),Path(90,90),Path(100,100)]}/>
            <SingleScroll n={2} path={[Path(10,10),Path(20,20),Path(30,30),Path(40,40),Path(50,50),Path(60,60),Path(70,70),Path(80,80),Path(90,90),Path(100,100)]}/> 
            <SingleScroll n={3} path={[Path(10,10),Path(20,20),Path(30,30),Path(40,40),Path(50,50),Path(60,60),Path(70,70),Path(80,80),Path(90,90),Path(100,100)]}/> 
            <SingleScroll n={4} path={[Path(10,10),Path(20,20),Path(30,30),Path(40,40),Path(50,50),Path(60,60),Path(70,70),Path(80,80),Path(90,90),Path(100,100)]}/> 
            <SingleScroll n={5} path={[Path(10,10),Path(20,20),Path(30,30),Path(40,40),Path(50,50),Path(60,60),Path(70,70),Path(80,80),Path(90,90),Path(100,100)]}/> 
            <SingleScroll n={6} path={[Path(10,10),Path(20,20),Path(30,30),Path(40,40),Path(50,50),Path(60,60),Path(70,70),Path(80,80),Path(90,90),Path(100,100)]}/> 
            <SingleScroll n={7} path={[Path(10,10),Path(20,20),Path(30,30),Path(40,40),Path(50,50),Path(60,60),Path(70,70),Path(80,80),Path(80,90),Path(40,80),Path(0,60)]}/> 
        </div>
    );
}

export default LearningPath;
