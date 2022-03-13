import React from "react";
import Select from 'react-select';
import PokemonCard from "../PokemonCard";
import "./styles.css";
export default function SelectPokemonComponent({options, onChange, selectedPokemons, selectedPokemonPower, deletePokemon, playerId}){
    return(
        <div className="select-pokemon-container">
            <p>Jogador {playerId}</p>
            <Select 
                className="select-dropdown" 
                options={selectedPokemons.length ==6? [] : options}  
                onChange={onChange} 
                noOptionsMessage={()=> "Número max de pokemons atingido"}
                placeholder={"Selecione o(s) pokémon(s)"}
            />
            <div className="selected-pokemon-list">
                {selectedPokemons.map((pokemon, index)=>(
                    <PokemonCard pokemon={pokemon} deletePokemon={deletePokemon} id={index} key={index} />
                ))}
            </div>
            <p>{selectedPokemonPower}</p>
        </div>
    )
}