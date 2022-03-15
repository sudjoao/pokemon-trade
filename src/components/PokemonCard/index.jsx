import React from "react";
import { firstLetterUpperCase } from "./controller";

import "./styles.css";

export default function PokemonCard({pokemon, deletePokemon, id, showDeleteButton=true}){
    return(
        <div className="selected-pokemon">
            {showDeleteButton?
                <span className="material-icons trash" onClick={()=>deletePokemon(id)}>
                    delete
                </span> :
                <>
                </>
            }
            <img src={pokemon.image} className="pokemon-img"/>
            <p className="pokemon-name">{firstLetterUpperCase(pokemon.name)}</p>
            <p>Poder: {pokemon.base_experience}</p>
        </div>
    );
}