
import React, {useReducer, useState} from "react"
import PokemonReducer from "./PokemonReducer"
import { useState } from "react"
import PokemonContext from "./PokemonContext"

const PokemonState = () => {
    const initialState = {
        pokemon: [],
        selectedPokemon: null, 
    }

    const [state,setstate] = useState(initialState)
    
    const [state, dispatch] = useReducer(PokemonReducer, initialState)

    const getPokemons = () => {}
    
    const getProfile = () => {}

    return(
        <PokemonContext.Provider>
            {props.children}
        </PokemonContext.Provider>
    )

}

export default PokemonState;