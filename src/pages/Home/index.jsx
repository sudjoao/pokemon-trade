import axios from 'axios';
import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Navbar';
import pokeAPI from '../../services/pokeapi/api';
import { Oval } from  'react-loader-spinner'
import './styles.css';
export default function HomePage(){
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getPokemons = async () => {
        try{
            let response = await pokeAPI.get('pokemon');
            let data = response.data;
            let pokemonList = [...data.results];
            while(data.next != null){
                response = await axios.get(data.next);
                data = response.data;
                pokemonList.push(...data.results);
                
            }
            setPokemons(pokemonList);
        }catch(error){
            if(axios.isAxiosError(error)){
                if(error.response?.status==404){
                    alert("Aparentemente os dados não existem tente novamente mais tarde");
                }
            }
        }
        setIsLoading(false);
    }
    useEffect(()=>{
        getPokemons();
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
                            />
                    </div>
                    :
                    pokemons.map((pokemon, index) => (
                        <p key={index}>{pokemon.name}</p>
                        ))
                    }
            </section>
        </div>
    )
}