import "./pizza.css";
import React from "react";
import PizzaCard from "./pizzaCard";

export default function Pizza(props) {



    const pizzaArray = [
        {
            id:0,
            title: "PIZZA CASEI",
            imgUrl: './pics/pizza-casei.jpg',
            description: "Sos de rosii, kasier, cabanos, mozzarella,ciuperci masline, gogosari murati",

            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:1,
            title: "PIZZA POLLO",
            imgUrl: "./pics/pizza-pollo.png",
            description: "Sos de rosii, piept de pui, porumb, ciuperci",
            gramaj: "590 gr",
            pret:"25 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:2,
            title: "PIZZA CAPRICIOSA",
            imgUrl: "./pics/pizza-capricciosa.jpg",
            description: "Sos de rosii, sunca presata, ciuperci, masline, mozzarella",
            gramaj: "590 gr",
            pret:"25 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:3,
            title: "PIZZA DIAVOLA",
            imgUrl: './pics/pizza-diavola-1.png',
            description: "Sos de rosii, salam chorizo, mozzarella, usturoi, ardei iute",
            gramaj: "590 gr",
            pret:"25 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:4,
            title: "PIZZA QUATTRO FORMAGGI",
            imgUrl: "./pics/pizza-quattro-formaggi.jpg",
            description: "Gran bavarese, smantana, cascaval, gorgonzola, mozzarella",
            gramaj: "590 gr",
            pret:"35 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:5,
            title: "PIZZA CU RUCOLA SI ROSII CHERRY",
            imgUrl: "./pics/pizza-cu-rucola-si-rosii-cherry.png",
            description: "Sunca 100gr, rosii cherry 50gr, mozzarella 150gr, rucola 100gr, sos de rosii 80gr",
            gramaj: "590 gr",
            pret:"32 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        }
    ]

    const ciorbeArray = [
        {
            id:0,
            title: "CIORBA DE BURTA",
            imgUrl: './pics/ciorba-de-burta.webp',
            description: "Ce contine ciorba de burta",
            gramaj: "400 gr",
            pret: "18 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:1,
            title: "CIORBA DE PERISOARE",
            imgUrl: "./pics/ciorba-de-perisoare.jpg",
            description: "Ce contine ciorba de perisoare",
            gramaj: "400 gr",
            pret: "15 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:2,
            title: "CIORBA DE VACUTA",
            imgUrl: "./pics/ciorba-de-vacuta.jpg",
            description: "Ce contine ciorba de vacuta",
            gramaj: "400 gr",
            pret: "18 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:3,
            title: "CIORBA DE FASOLE",
            imgUrl: "./pics/ciorba-de-fasole.jpg",
            description: "Ce contine ciorba de fasole",
            gramaj: "400 gr",
            pret: "13 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        },
        {
            id:4,
            title: "CIORBA DE FASOLE CU AFUMATURA",
            imgUrl: "./pics/ciorba-de-fasole-cu-afumatura.jpg",
            description: "Ce contine ciorba de fasole cu afumatura",
            gramaj: "",
            pret: "15 lei",
            pretMica : "26 lei",
            pretMare : "38 lei"
        }
    ]
    const cardRenderer = []
    function RenderCard(args) {

        for (let i=0; i < args.length; i++){
            cardRenderer.push(
                <PizzaCard 
                key={args[i].id}
                id={args[i].id} 
                imgUrl={args[i].imgUrl} 
                title={args[i].title}
                description={args[i].description}
                gramaj={args[i].gramaj}
                pret={args[i].pret}
                pretMica={args[i].pretMica}
                pretMare={args[i].pretMare}
                number={i}
                />
            )
        }
    }

    switch (props.optionTitle){
        case "Ciorbe" :
            RenderCard(ciorbeArray)
            break;
        // case "Meniuri Complete" :
        //     RenderCard(meniuriCompleteArray)
        //     break;
        // case "Fel Principal" :
        //     RenderCard(felPrincipalArray)
        //     break;
        // case "Preparate La Gratar" :
        //     RenderCard(preparateLaGratarArray)
        //     break;
        // case "Fast Food" :
        //     RenderCard(fastFoodArray)
        //     break;
        case "Pizza" :
            RenderCard(pizzaArray)
            break;
        // case "Paste" :
        //     RenderCard(pasteArray)
        //     break;
        // case "Gustari Calde" :
        //     RenderCard(gustariCaldeArray)
        //     break;
        // case "Desert" :
        //     RenderCard(desertArray)
        //     break;
        // case "Garnituri" :
        //     RenderCard(garnituriArray)
        //     break;
        default:
            console.log("no such option");
    }



    return (
        <>
        <div id="pizza" className="pizza-section">
            {/* <h3 className="pizza-section-title">Pizza</h3> */}

            {cardRenderer}

        </div>

        </>
    )
}