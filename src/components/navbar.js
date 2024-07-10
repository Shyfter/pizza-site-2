import React from "react";
import "./navbar.css";

export default function Navbar() {

    function myFunction() {
        let divClass = document.getElementById("menu");
        let divDropdown = document.getElementById("navOptions");
        if(divClass.className === "container"){
            divClass.className="change";
            divDropdown.style.display = "flex";
        }else{
            divClass.className="container";
            divDropdown.style.display = "none";
        }
      }

    function closeMenu() {
        let divClass = document.getElementById("menu");
        let divDropdown = document.getElementById("navOptions");
        if (divDropdown.style.display === "flex" && divClass.className === "change") {
            divDropdown.style.display = "none";
            divClass.className = "container";
        }
    }


    return (
        <>  
            <div id="top"></div>
            <div id='menu' className="container" onClick={()=>{myFunction()}}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <nav className="navbar">
                <div className="navOptions" id="navOptions">
                    <div className="Home" onClick={()=>{closeMenu()}}><a href="#top">Acasa</a></div>
                    <div className="Projects" onClick={()=>{closeMenu()}}><a href="#meniu">Meniu</a></div>
                    <div className="Projects" onClick={()=>{closeMenu()}}><a href="#contact">Contact</a></div>
                </div>
                <div className="logo">
                    <img src="./pics/logo-afacerea ta.png" alt="Logo"></img>
                </div>
            </nav>
        </>
    )
}