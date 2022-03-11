import React from "react";
import Select from 'react-select';
import "./styles.css";
export default function SelectPokemonComponent({options, onChange, selectedPokemons, selectedPokemonPower}){
    return(
        <div className="select-pokemon-container">
            <Select className="select-dropdown" options={options} isMulti onChange={onChange}/>
            <div className="selected-pokemon-list">
                {selectedPokemons.map((pokemon)=>(
                    <div className="selected-pokemon" key={pokemon.name}>
                        <img src={pokemon.sprites.front_default} key={pokemon.name} className="pokemon-img"/>
                        <p className="pokemon-name">{pokemon.name}</p>
                    </div>
                ))}
            </div>
            <p>{selectedPokemonPower}</p>
        </div>
    )
}