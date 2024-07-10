import React from "react";
import "./meniu.css";

export default function Meniu(props) {

    function setPageProperly(args) {
            props.setPage(args)
    }

    return (
        <div id="meniu" className="meniu-container">
            <h2 className="meniu-title">Meniu</h2>
            <div className="meniu-optiuni">
                <div className="ciorbe" onClick={()=>{setPageProperly("Ciorbe")}}>
                    <p>CIORBE</p>
                </div>
                <div className="meniuri-complete" onClick={()=>{setPageProperly("Meniuri Complete")}}>
                    <p>MENIURI COMPLETE</p>
                </div>
                <div className="fel-principal" onClick={()=>{setPageProperly("Fel Principal")}}>
                    <p>FEL PRINCIPAL</p>
                </div>
                <div className="preparate-la-gratar" onClick={()=>{setPageProperly("Preparate La Gratar")}}>
                    <p>PREPARATE LA GRATAR</p>
                </div>
                <div className="fast-food" onClick={()=>{setPageProperly("Fast Food")}}>
                    <p>FAST FOOD</p>
                </div>
                <div className="pizza" onClick={()=>{setPageProperly("Pizza")}}>
                    <p>PIZZA</p>
                </div>
                <div className="paste" onClick={()=>{setPageProperly("Paste")}}>
                    <p>PASTE</p>
                </div>
                <div className="gustari-calde" onClick={()=>{setPageProperly("Gustari Calde")}}>
                    <p>GUSTARI CALDE</p>
                </div>
                <div className="desert" onClick={()=>{setPageProperly("Desert")}}>
                    <p>DESERT</p>
                </div>
                <div className="garnituri" onClick={()=>{setPageProperly("Garnituri")}}>
                    <p>GARNITURI</p>
                </div>
            </div>
        </div>
    )
}