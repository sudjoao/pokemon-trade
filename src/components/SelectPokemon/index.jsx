import React from "react";
import Select from 'react-select';
import PokemonCard from "../PokemonCard";
import "./styles.css";
export default function SelectPokemonComponent({options, onChange, selectedPokemons, selectedPokemonPower, deletePokemon}){
    return(
        <div className="select-pokemon-container">
            <Select 
                className="select-dropdown" 
                options={selectedPokemons.length ==6? [] : options}  
                onChange={onChange} 
                noOptionsMessage={()=> "Número max de pokemons atingido"}/>
            <div className="selected-pokemon-list">
                {selectedPokemons.map((pokemon, index)=>(
                    <PokemonCard pokemon={pokemon} deletePokemon={deletePokemon} id={index} key={index}/>
                ))}
            </div>
            <p>{selectedPokemonPower}</p>
        </div>
    )
}