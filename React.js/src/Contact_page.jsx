import React from "react"
import "./contact.css"
import mail from "./assets/images/mail-icon.png"
import phone_icon from "./assets/images/phone-icon.png"


 export default function Contact(data){
    
    return(
        <article className="contact-card">
            <img
                src={data.img}
                alt={data.name}
            />
            <h3>{data.name}</h3>
            <div className="info-group">
                <img
                    src={phone_icon}
                    alt="phone icon"
                />
                <p>{data.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src={mail}
                    alt="mail icon"
                />
                <p>{data.email}</p>
            </div>
        </article>
    );
    
};