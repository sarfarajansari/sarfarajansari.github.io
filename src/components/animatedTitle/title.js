import React from 'react';
import "./title.css";

const Title = (props) => {
    return (
        <div className="animated-title-container" id={props.id}>
            
            {props.text.split(" ").map((word,i)=>{
                return(
                    <p>{word.split("").map((letter,j)=>{
                        let word_length =(window.innerWidth/100)*6.5<=3*16?3*16:(window.innerWidth/100)*6.5 
                        word_length=word_length>=8*16?8*16:word_length;
                        word_length=window.innerWidth<600?2.3*16:word_length;
                        let l = word.split("").length
                        let left_spacing = (window.innerWidth-(word_length*l))/2
                        left_spacing+=(j-0.5)*word_length

                        return <span id={"word"+String(i)+"letter"+String(j)} style={{left:left_spacing}}>{letter}</span>
                    })}</p>
                )
            })}
        </div>
    );
}

export default Title;
