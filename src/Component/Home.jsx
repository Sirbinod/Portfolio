import React from "react";
import HomeSection from "./HomeSection";
import About from "./About";
import Portfolio from "./Protfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Service from "./Service";

const Home = () =>{
    return(
        <>
            <HomeSection/>
            <About />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};
 export default Home;