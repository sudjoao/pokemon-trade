import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import PokemonCard from "../../components/PokemonCard";
import './styles.css';
export default function HistoryPage(){
    const [history, setHistory] = useState([]);

    useEffect(()=>{
        const historyData = localStorage.getItem("history");
        if(historyData!= null)
            setHistory(JSON.parse(historyData));
    }, []);

    return(
        <div className="history-container">
            <NavBar/>
            <h1>Histórico</h1>
            <section className="history-data">
                {history.length > 0 ? 
                    history.map((tradeData, index)=>(
                        <div key={index} className='single-history-data'>
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
                )) :
                <p>Nenhuma troca realizada.</p>
            }
            </section>
        </div>
    );
}