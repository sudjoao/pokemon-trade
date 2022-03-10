
import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Navbar';
import { Oval } from  'react-loader-spinner'
import Select from 'react-select'
import './styles.css';
import { getOptions, getPokemons, handlePokemonSelection } from './controller';
export default function HomePage(){
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPokemons, setSelectedPokemons] = useState([]);


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
                    <Select options={getOptions(pokemons)} isMulti onChange={(newValue)=>handlePokemonSelection(newValue, selectedPokemons, setSelectedPokemons)}/>
                }
                {selectedPokemons.map((pokemon)=>(
                    <img src={pokemon.sprites.front_default} key={pokemon.name}/>
                ))}
            </section>
        </div>
    )
}