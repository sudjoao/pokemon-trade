
import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Navbar';
import { Oval } from  'react-loader-spinner';
import './styles.css';
import { getOptions, getPokemons, getPokemonsPower, handleConfirmTrade, handlePokemonSelection, handleRemovePokemon } from './controller';
import SelectPokemonComponent from '../../components/SelectPokemon';
import ConfirmButton from '../../components/ConfirmButton';
export default function HomePage(){
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPokemonsTrainer1, setSelectedPokemonsTrainer1] = useState([]);
    const [selectedPokemonsTrainer2, setSelectedPokemonsTrainer2] = useState([]);


    useEffect(()=>{
        getPokemons(setPokemons, setIsLoading);
    }, []);

    return(
        <div className="home-container">
            <NavBar/>
            <section className='pokemon-trade-container'>
                {
                    isLoading?
                    <div className='loading-indicator'>
                        <Oval
                            height="100"
                            width="100"
                            color='grey'
                            ariaLabel='loading'
                            noOptionsMessage/>
                    </div>
                    :
                    <>
                        <div className="trainers-trade-area">
                            <SelectPokemonComponent 
                                options={getOptions(pokemons)} 
                                onChange={(newValue)=>handlePokemonSelection(newValue, selectedPokemonsTrainer1, setSelectedPokemonsTrainer1)} 
                                selectedPokemons={selectedPokemonsTrainer1} selectedPokemonPower={getPokemonsPower(selectedPokemonsTrainer1)} 
                                deletePokemon={(index)=>handleRemovePokemon(selectedPokemonsTrainer1, setSelectedPokemonsTrainer1, index)}
                            />
                            <SelectPokemonComponent 
                                options={getOptions(pokemons)}
                                onChange={(newValue)=>handlePokemonSelection(newValue, selectedPokemonsTrainer2, setSelectedPokemonsTrainer2)}
                                selectedPokemons={selectedPokemonsTrainer2} selectedPokemonPower={getPokemonsPower(selectedPokemonsTrainer2)} 
                                deletePokemon={(index)=>handleRemovePokemon(selectedPokemonsTrainer2, setSelectedPokemonsTrainer2, index)}
                            />
                        </div>
                        <ConfirmButton onClick={()=>handleConfirmTrade(selectedPokemonsTrainer1, selectedPokemonsTrainer2)}/>
                    </>
            
                }
            </section>
        </div>
    )
}