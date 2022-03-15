
import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Navbar';
import { Oval } from  'react-loader-spinner';
import './styles.css';
import { getOptions, getPokemons, getPokemonsPower, getPowerDifferece, handleConfirmTrade, handlePokemonSelection, handleRemovePokemon } from './controller';
import SelectPokemonComponent from '../../components/SelectPokemon';
import StyledButton from '../../components/StyledButton';
export default function TradePage(){
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPokemonsTrainer1, setSelectedPokemonsTrainer1] = useState([]);
    const [selectedPokemonsTrainer2, setSelectedPokemonsTrainer2] = useState([]);


    useEffect(()=>{
        getPokemons(setPokemons, setIsLoading);
    }, []);

    return(
        <div className="trade-container">
            <NavBar/>
            <section className='pokemon-trade-container'>
            <div className='rules-book'>
                <h2>Regras e Informações</h2>
                <p>Para que você consiga realizar uma troca é necessário:</p>
                <ol>
                    <li>Ter no mínimo 1 pokémon de cada lado e no máximo 6</li>
                    <li>A diferença de poderes entre os pokémons trocados, indicada abaixo dos pokémons, não pode ultrapassar 100</li>
                    <li>Você pode selecionar mais de um mesmo pokémon na troca</li>
                    <li>Caso a troca seja válida a mesma constará na página histórico posteriormente.</li>
                </ol>
            </div>
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
                                selectedPokemons={selectedPokemonsTrainer1} 
                                selectedPokemonPower={getPokemonsPower(selectedPokemonsTrainer1)} 
                                deletePokemon={(index)=>handleRemovePokemon(selectedPokemonsTrainer1, setSelectedPokemonsTrainer1, index)}
                                playerId={1}
                            />
                            <SelectPokemonComponent 
                                options={getOptions(pokemons)}
                                onChange={(newValue)=>handlePokemonSelection(newValue, selectedPokemonsTrainer2, setSelectedPokemonsTrainer2)}
                                selectedPokemons={selectedPokemonsTrainer2} 
                                selectedPokemonPower={getPokemonsPower(selectedPokemonsTrainer2)} 
                                deletePokemon={(index)=>handleRemovePokemon(selectedPokemonsTrainer2, setSelectedPokemonsTrainer2, index)}
                                playerId={2}
                            />
                        </div>
                        <p>Diferença de poder atual: {getPowerDifferece(selectedPokemonsTrainer1, selectedPokemonsTrainer2)}</p>
                        <StyledButton onClick={()=>handleConfirmTrade(selectedPokemonsTrainer1, selectedPokemonsTrainer2)} label='Confirmar'/>
                    </>
            
                }
            </section>
        </div>
        
    )
}