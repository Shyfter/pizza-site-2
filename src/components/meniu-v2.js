import React from "react";
import "./meniu-v2.css";
import Pizza from "./pizza";
import Footer from "./footer";

export default function MeniuV2(props) {
    return (
        <>
            <div className="meniu-v2">
                <img src="./pics/background-baraca.jpg" alt="logo"></img>
                <div className="meniu-v2-title" onClick={()=>{props.setPage("Home")}}>
                    <img src="./pics/back.png" alt="back"></img>
                    <h2>{props.optionTitle}</h2>
                </div>

                {/* <div className="meniu-v2-options">
                    <div className="options-container">
                        <h3 className="meniu-vs-options-title">
                            Ciorba de Burta
                        </h3>
                        <p className="gramaj">400 gr</p>
                        <h5 className="pret">18 LEI</h5>
                    </div>
                </div> */}
                <Pizza optionTitle={props.optionTitle}/>

            </div>

            <Footer />
        </>
    )
}