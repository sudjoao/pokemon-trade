import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import PokemonCard from "../../components/PokemonCard";
import './styles.css';
export default function HistoryPage(){
    const [history, setHistory] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=>{
        setHistory(JSON.parse(localStorage.getItem("history")));
    }, [])

    return(
        <div className="history-container">
            <NavBar/>
            <h1>Histórico</h1>
            <section className="history-data">
                {history.map((tradeData, index)=>(
                    <div key={index}>
                        <h2>Troca {index+1}</h2>
                        <div className="trade-info-container">
                            <div className="trade-pokemons-container">
                                {tradeData.pokemonListUser1.map((pokemon, id)=>(
                                <PokemonCard pokemon={pokemon} showDeleteButton={false} key={id}/>
                                ))}
                            </div>
                            <h2>VS</h2>
                            <div className="trade-pokemons-container">
                            {tradeData.pokemonListUser2.map((pokemon, id)=>(
                                <PokemonCard pokemon={pokemon} showDeleteButton={false} key={id}/>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}