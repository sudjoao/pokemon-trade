import axios from 'axios';
import pokeAPI from '../../services/pokeapi/api';

export const getOptions = (pokemons) => {
    let optionsList= pokemons.map((pokemon) => {
        return {value: pokemon.url, label: pokemon.name}
    });
    return optionsList;
}

export const handlePokemonSelection= async (newSelectedPokemons, currentSelectedPokemons, setSelectedPokemons) => {
    if(newSelectedPokemons.length > currentSelectedPokemons.length){
        const response = await axios.get(newSelectedPokemons[newSelectedPokemons.length-1].value);
        setSelectedPokemons([...currentSelectedPokemons, response.data]);
    }
    else if(newSelectedPokemons.length == 0){
        console.log(currentSelectedPokemons.length);
        setSelectedPokemons([]);
    }
    else{
        let removedPokemonIndex;
        let currentPokemonList = [...currentSelectedPokemons];
        for(let i=0; i<currentPokemonList.length; i++){
            if(newSelectedPokemons.filter(newPokemon => newPokemon.label == currentPokemonList[i].name).length == 0){
                removedPokemonIndex = i;
                break;
            }
        }
        currentPokemonList.splice(removedPokemonIndex, 1);
        setSelectedPokemons(currentPokemonList);
    }
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