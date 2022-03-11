import React from "react";
import "./styles.css";
export default function ConfirmButton({onClick}){
    return(
        <button className="confirm-trade-button" onClick={onClick}>Confirmar</button>
    );
}