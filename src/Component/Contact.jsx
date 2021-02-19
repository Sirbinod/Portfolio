import React from "react";
import ContactItem from "./ContactItem";
import Phone from '@material-ui/icons/PhoneIphone';
import Email from '@material-ui/icons/Email';
import Person from '@material-ui/icons/PersonPin';
import "../CSS/Contact.css";

const Contact = () =>{
    return(
        <div className="contact">
            <div className="container">
                <h1>Contact</h1>
                <h3>I'AM AVAILABLE FOR WORK, PLEASE CONTACT ME.</h3>
                <div className="con_content">
                    <ContactItem 
                    icon = {<Phone />}
                    title="Phone"
                    text="9860536317"
                    />
                      <ContactItem 
                    icon = {<Email />}
                    title="Email"
                    text="00np10@gmail.com"
                    />
                      <ContactItem 
                    icon = {<Person />}
                    title="Address"
                    text="Samakhusi, Kathmandu, Nepal"
                    />
                </div>
            </div>
        </div>
    );
};
export default Contact;