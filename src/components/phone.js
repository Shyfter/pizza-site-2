import React from "react";
import "./phone.css";

export default function Phone(props) {
    // window.onscroll = () => {
    //     let scrolled = window.scrollY;
    //     if (scrolled > 1200){
    //         document.getElementById('phone').style.display="none"
    //     }else {
    //         document.getElementById('phone').style.display="block"
    //     }
    // }



    return (
        <div id="phone" className="phone" onClick={()=>{window.open('tel:0777777777')}}>
            <img src="./pics/phone-icon.png" alt="call"></img>
        </div>
    )
}