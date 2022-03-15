import React from "react";
import "./styles.css";
export default function StyledButton({onClick, label}){
    return(
        <button className="styled-button" onClick={onClick}>{label}</button>
    );
}