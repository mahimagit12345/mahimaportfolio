
import  "./contactme.css"
import phone from "../../images/phone.png" 
import email from "../../images/Email.png" 
import location from "../../images/Location.png"
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";


export default function Contactme() {
    const form= useRef();
    const[done,setDone]=useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cv34its', 'template_f4aapl8', form.current, 'user_xZcDouRYsSMtGYPvz2OdK')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="outer-box"id="cont">

            <div className="lfbx">
                <div className="title-box">
                    Lets discuss <br></br> your project
                </div>
                <div className="content-box">
                    <div className="image-box">
                        <img src={phone} alt="" className="c-icon" />  
                    </div>
                    <div className="contact">
                        +91 9359957531
                    </div>
                
                </div>
            
                <div className="content-box">
                    <div className="image-box">
                        <img src={email} alt="" className="c-icon" /> 
                    </div>
                    <div className="contact">
                        mahimagovekar1366@gmail.com
                    </div>
                
                </div>
        
                <div className="content-box">
                    <div className="image-box">
                        <img src={location} alt="" className="c-icon" /> 
                    </div>
                    <div className="contact">
                        Nachinola-Goa
                    </div>
                
                </div>
            </div>
            <div className="rgbx">
                <div className="dsc">
                    <p><strong>Whats your story?</strong>Get in touch. Always available for freelancing if the right project come in.
                    
                    </p>
                </div>
                <div className="contform">
                <form ref={form} onSubmit={sendEmail}>
      
      <input type="text" name="from_name" placeholder="Name" />
      
      <input type="email" name="user_email" placeholder="Email" />
      
      <textarea name="message" placeholder="Message"/><br></br>
      <input type="submit" value="Send" />
      {done && "Thank you..."}
    </form>
                </div>

            </div>
        </div>
    )
}
