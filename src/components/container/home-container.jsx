import React from 'react';
import "./container.css"

const Homecontainer = (props) => {
    if (props.type===1){
        return(
            <div className=" homecontainer1">
                <div>{props.leftElement}</div>
                <div>{props.rightElement}</div>
            </div>
        )
    }
    return (
        <div className=" homecontainer2">
            <div>{props.leftElement}</div>
            <div>{props.rightElement}</div>
        </div>
    );
}

export default Homecontainer;
