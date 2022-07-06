
import React, {useReducer, useState} from "react"
import PokemonReducer from "./PokemonReducer"
import PokemonContext from "./PokemonContext"
import axios from "axios"

const PokemonStateGlobal = (props) => {
    const initialState = {
        pokemon: [],
        selectedPokemon: null, 
    }

    // const [state,setstate] = useState(initialState)
    
    const [state, dispatch] = useReducer(PokemonReducer, initialState)

    const getPokemons = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(res)
    }
    
    const getProfile = async (id) => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon' + id)
        console.log(res)
    }

    return(
        <PokemonContext.Provider value={{
            pokemon: state.pokemon,
            selectedPokemon: state.selectedPokemon,
            getPokemons,
            getProfile            
        }}>
            {props.children}
        </PokemonContext.Provider>
    )

}

export default PokemonStateGlobal;