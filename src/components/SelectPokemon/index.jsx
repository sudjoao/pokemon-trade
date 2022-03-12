import React from "react";
import Select from 'react-select';
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
                    <div className="selected-pokemon" key={index}>
                        <span className="material-icons trash" onClick={()=>deletePokemon(index)}>
                            delete
                        </span>
                        <img src={pokemon.image} key={index} className="pokemon-img"/>
                        <p className="pokemon-name">{pokemon.name}</p>
                    </div>
                ))}
            </div>
            <p>{selectedPokemonPower}</p>
        </div>
    )
}