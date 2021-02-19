import React from "react";
import "../CSS/Service.css"
import ServiceItem from "./ServiceItem";
import Web from "../Image/website.png";
import Laptop from '@material-ui/icons/LaptopMac';
import Phone from '@material-ui/icons/PhonelinkSetup';
import Setting from '@material-ui/icons/Settings';

const Service = () =>{
    return(
        <div className="service">
            <div className="container">
                 <h1>Service</h1>
                <div className="service_content">
                    <ServiceItem
                    image={<Laptop />}
                    name="Web App Dev"
                    text=" i develop diffrent simple to complex"
                    />
                    <ServiceItem
                    image={<Phone />}
                    name="Web App Dev"
                    text=" i develop diffrent simple to complex"
                    />
                    <ServiceItem
                    image={<Setting />}
                    name="Web App Dev"
                    text=" i develop diffrent simple to complex"
                    />

                </div>
             
            </div>
           
        </div>
    );
};
export default Service;
