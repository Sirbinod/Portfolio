import React from "react";

const ContactItem = (props) =>{
    return(
        <div className="c_item">
            <div className="icon">
                {props.icon}
            </div>
            <div className="c_content">
                <h2>{props.title}</h2>
                <h2>{props.text}</h2>
            </div>
        </div>
    );
};
export default ContactItem;