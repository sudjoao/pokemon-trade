import axios from 'axios';
import pokeAPI from '../../services/pokeapi/api';

export const getOptions = (pokemons) => {
    let optionsList= pokemons.map((pokemon) => {
        return {value: pokemon.url, label: pokemon.name}
    });
    return optionsList;
}

export const handlePokemonSelection= async (selectedPokemon, currentSelectedPokemons, setSelectedPokemons) => {
        const response = await axios.get(selectedPokemon.value);
        const {name, base_experience, sprites} = response.data;
        setSelectedPokemons([...currentSelectedPokemons, {name, image: sprites.front_default, base_experience}]);
}

export const handleRemovePokemon = (pokemonList, setPokemonList, removedPokemonIndex) => {
    let currentPokemonList = [...pokemonList];
    currentPokemonList.splice(removedPokemonIndex, 1);
    setPokemonList(currentPokemonList);
}

export const getPokemons = async (setPokemons, setIsLoading) => {
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

export const getPokemonsPower = (pokemonList) => {
    let pokemonsPower = 0;
    pokemonList.forEach(pokemon=>{
        pokemonsPower+=pokemon.base_experience;
    });
    return pokemonsPower;
}

export const handleConfirmTrade = (pokemonListUser1, pokemonListUser2) => {
    if(pokemonListUser1.length && pokemonListUser2.length){
        let historyOldData = localStorage.getItem('history');
        if(Math.abs(getPokemonsPower(pokemonListUser1) - getPokemonsPower(pokemonListUser2)) < 100){
            const newTradeData = {pokemonListUser1, pokemonListUser2, powerDifference: Math.abs(getPokemonsPower(pokemonListUser1) - getPokemonsPower(pokemonListUser2))};
            if(historyOldData != null){
                localStorage.setItem('history', JSON.stringify([newTradeData, ...JSON.parse(historyOldData)]));
            }
            else{
                localStorage.setItem('history', JSON.stringify([newTradeData]));
            }
            window.location.reload();
            alert("Troca Realizada com sucesso");
        }else{
            alert("Diferença entre poderes muito grande, tente balancear a troca");
        }
    }else{
        alert("Para fazer a troca é necessário escolher pelo menos 1 pokémon de cada lado");
    }
}