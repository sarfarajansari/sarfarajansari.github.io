import React from 'react';
import "./detail.css";

const Detail = (props) => {
    const top=(window.innerHeight-400 + 80)/2
    const left=(window.innerWidth-400)/2

    const positive=(n)=>n>=0?n:0
    return (
        <div id="detail" className={"detail-container box-element"} style={{top:positive(top),left:positive(left)}}>
            {props.body?<>
                <h1>{props.body.title}</h1>
            </>:<></>}
        </div>
    );
}

export default Detail;
