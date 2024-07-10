import React from "react";
import "./footer.css";

export default function Footer() {
    return (
    <footer id="contact">
        <img src="./pics/logo-lorem-ipsum-removebg-preview.png" alt="logo"></img>
        <h2 className="contact-title">Numele afacerii tale</h2>
        <div className="location" onClick={()=>{window.open('https://www.google.com/maps/')}}>
            <img src="./pics/location.png" alt="location"></img>
            <p>(Example) Str Bujorului 1, Bucuresti, Romania</p>
        </div>
        <div className="phone1">
                <div className="contact-container phone-container" onClick={()=>{window.open('tel:0777777777')}}>
                    <img className="phone-img" src='./pics/phone-icon-contact.png' alt="icon"></img>
                    <p>0777 777 777</p>
                </div>
        </div>
        <div className="footer">
            <div className="facebook">
                <div className="contact-container" onClick={()=>{window.open('https://www.facebook.com/')}}>
                    <img className="footer-img" src="./pics/facebook.png" alt="icon"></img>
                </div>
            </div>
            <div className="instagram">
                <div className="contact-container" onClick={()=>{window.open('https://www.instagram.com/')}}>
                    <img className="footer-img" src='./pics/instagram.png' alt="icon"></img>
                </div>
            </div>
            <div className="whatsapp">
                <div className="contact-container" onClick={()=>{window.open('https://wa.me/40777777777')}}>
                    <img className="footer-img" src='./pics/whatsapp.png' alt="icon"></img>
                </div>
            </div>
        </div>
    </footer>
    )
}