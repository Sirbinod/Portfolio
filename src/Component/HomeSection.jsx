import React from "react";
import CoverImage from "../Image/home.JPG";
import "../CSS/HomeSection.css"

const HomeSection = () =>{
    return(
        <div className="home_container">
            <img src={CoverImage} />
            <h2> Hello, I'm Sarbin Shrestha</h2>
            <h1> Full-Stack Developer and freelancer</h1>
        </div>
    );
};

export default HomeSection;