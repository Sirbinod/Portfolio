import React from "react";
import "../CSS/About.css";
import Profile from "../Image/profile.JPG";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const About = () =>{
    return(
        <div className="about">
            <div className="max-width">
                <h1 className="title"> About Me</h1>
                <div className="about-content">
                <div className="left">
                    <img src={Profile} alt=""/>
                </div>
               
                <div className="right">
                    <h2>I'm Sarbin</h2>
                    <p>I'm full stack developer</p>
                    <p>To gain more knowledge in the field of software development working with experiences personnel’s and contribute to the world with the skills Ihave and will have. Well-versed in numerous programing langauges including HTMLS, CSS, JavaScript, SQL, noSQL, Python and Dark with Flutter. Strong background in full stack web app with node,express and react and team work.</p>
                    <div className="so_media">
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />

                    </div>
                </div>
            </div>
            </div>
             </div>


    );
};
export default About;