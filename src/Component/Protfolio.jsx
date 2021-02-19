import React from "react";
import "../CSS/Portfolio.css"
import PortfolioItem from "./PortfolioItem";
import Web from "../Image/website.png";

const Portfolio = () =>{
    return(
       <div className="portfolio">
         <div className="container">
           <h1>Protfolio</h1>
           <div className="port_content">
             <PortfolioItem 
             image={Web}
             name="Web App Dev"
             />
              <PortfolioItem 
             image={Web}
             name="Web App Dev"
             />
               <PortfolioItem 
             image={Web}
             name="Web App Dev"
             />
           </div>
         </div>
       </div>
    );
};
export default Portfolio;