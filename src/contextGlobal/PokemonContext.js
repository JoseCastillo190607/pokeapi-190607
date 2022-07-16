import React, { useState, createContext } from 'react'
const initialState = {
          pokemon:"",
          img:"",
};


export const PokemonContext = createContext(initialState);

export const PokemonProvider = ({children}) => {

  const[pokemon,setPokemon] = useState("")
 
  const handleChange = (NamePokemon) => {
    NamePokemon = NamePokemon.toLowerCase()
    setPokemon(NamePokemon)
  };

  return(
    <PokemonContext.Provider value={{pokemon,handleChange}}>
      {children}
    </PokemonContext.Provider>
  )
}

