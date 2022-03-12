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
        setSelectedPokemons([...currentSelectedPokemons, response.data]);
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
        if(Math.abs(getPokemonsPower(pokemonListUser1) - getPokemonsPower(pokemonListUser2)) < 100){
            window.location.reload();
            alert("Troca Realizada com sucesso");
        }else{
            alert("Diferença entre poderes muito grande, tente balancear a troca");
        }
    }else{
        alert("Para fazer a troca é necessário escolher pelo menos 1 pokémon de cada lado");
    }
}