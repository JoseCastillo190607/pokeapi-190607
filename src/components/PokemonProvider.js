import React, {useState, useContext} from 'react'


const PokemonContext = React.createContext();
const PokemonTablaContext = React.createContext();

export function usePokemonContext(){
    return useContext(PokemonContext)
}

export function usePokemonTablaContext(){
    return useContext(PokemonTablaContext)
}

export default function PokemonProvider({Children}) {

    const [pokemon,setPokemon] = useState([]);
    const [cardPokemon, setCardpokemon] = useState ([]);
    const [busqueda, setBusqueda] = useState ("");


    const handleChange=e=>{
        setBusqueda(e.target.value);
        console.log("Busqueda:"+e.target.value)
    }

    const filtrar=(terminoBusqueda)=> {
        var busquedaResult=cardPokemon.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
              return elemento;  
            }
        });
        setPokemon(busquedaResult);
    }

  return (
    <PokemonContext.Provider value={pokemon}>
        <PokemonTablaContext.Provider value={handleChange, filtrar,busqueda}>
            {Children}
        </PokemonTablaContext.Provider>
    </PokemonContext.Provider>
  )
}
