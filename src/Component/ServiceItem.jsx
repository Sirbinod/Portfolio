
import React from "react";
import {Link} from "react-router-dom";

const ServiceItem = (props) =>{
    return(
        <>
         <div className="cards">
            <div className="s_icon">
                {props.image}
            </div>
            <div className="content">
            <div className="card_title">
                <h2>{props.name}</h2>
            </div>
            <div className="card_text">
                <p>{props.text}</p>
            </div>
            </div>
        </div>
        </>
    );
};
export default ServiceItem;