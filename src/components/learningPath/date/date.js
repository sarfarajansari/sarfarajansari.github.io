import React from 'react';
import "./date.css"

const Datestr = (props) => {
    return (
        <div style={props.style} className="date-container" onClick={props.onclick} >
            <div  className="date"> 

             {props.type==="right" ?
             <svg stroke="currentColor" fill="currentColor" strokewidth="{0}" viewBox="0 0 6 16"  width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2L0 8l6 6V2z" />
            </svg>:<></>}

                <p className="date-tag unselectable">{props.date}</p>
            {props.type=="left"?
            <svg stroke="currentColor" fill="currentColor" strokewidth="{0}" viewBox="0 0 6 16"  width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M0 14l6-6-6-6v12z" />
            </svg>:<></>}
        </div>
        </div>
    );
}

export default Datestr;

