import React from "react";
import "./pizzaCard.css";

export default function PizzaCard (props) {
    // const [price, setPrice] = React.useState("Alege o optiune")

    // function ChangePrice(pret) {
    //     setPrice(pret)
    //     let elementPret = document.getElementsByClassName('price')
    //     elementPret[props.number].style.cssText='font-size: 1.1rem; font-weight: bold;'
    // }

    return (
        <div key={props.id} className="pizza-card">
            <img className="card-pic" alt="pizza" src={props.imgUrl}></img>
            <div className="card-bottom-section">
                <h4 className="pizza-name">{props.title}</h4>
                <p className="pizza-description">{props.description}</p>
                <br></br>
                <p>{props.gramaj}</p>
                <h4>{props.pret}</h4>

                {/* <div className="pret-pizza">
                    <p className="price-txt">De la:</p>
                    <p className="price">{price}</p>
                </div>
                <div className="pizza-dimensiuni">
                    <div className="pizza-mica" onClick={()=>{ChangePrice(props.pretMica)}}>
                        Mica
                    </div>
                    <div className="pizza-mare" onClick={()=>{ChangePrice(props.pretMare)}}>
                        Mare
                    </div>
                </div> */}
            </div>
        </div>
    )
}