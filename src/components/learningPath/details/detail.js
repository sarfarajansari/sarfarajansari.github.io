import React from 'react';
import "./detail.css";

const Detail = (props) => {
    const top=window.innerWidth<=720?(window.innerHeight-420 + 80)/2:(window.innerHeight-500 + 80)/2
    const left=window.innerWidth<=720?(window.innerWidth-370)/2:(window.innerWidth-500)/2


    const positive=(n)=>n>=0?n:0
    return (
        <div id="detail" className={"detail-container box-element"} style={{top:"-100%",left:positive(left)}}>
            {props.body?<>
                <h1 className="title">Title</h1>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;information</p>
            </>:<></>}
        </div>
    );
}

export default Detail;
