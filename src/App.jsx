import React from "react";
import Navbar from "./Component/Navbar";
import { Switch, Route } from 'react-router-dom';
import Home from "./Component/Home";
import About from "./Component/About";
import "./App.css"
import Service from "./Component/Service";
import Portfolio from "./Component/Protfolio";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const App = () =>{
    return(
        <>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/about" component={About} />
                    <Route  path="/service" component={Service} />
                    <Route  path="/portfolio" component={Portfolio}/>
                    <Route  path="/contact" component={Contact}/>

                </Switch>
                
        </>
    );
};
export default App;