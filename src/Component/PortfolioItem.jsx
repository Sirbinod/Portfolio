import React from "react";
import {Link} from "react-router-dom";
import Portfolio from "./Protfolio";

const PortfolioItem = (props) =>{
    return(
        <>
           <div className="card">
                <img src={props.image} alt="arty"/>
                <div className="content">
                <div className="card_title">
                    <h2>{props.name}</h2>
                </div>
                </div>
            </div>
    </>
    );
};
export default PortfolioItem;