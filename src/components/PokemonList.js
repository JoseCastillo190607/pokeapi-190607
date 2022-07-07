import React from 'react'
// import PokemonContext from '../context/Pokemons/PokemonContext'
// import { useContext } from 'react'
// import PokemonStateGlobal from '../context/Pokemons/PokemonStateGlobal'
import '../components/pokemonlist.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { usePokemonContext } from "./PokemonProvider";

export default function PokemonList() {

//     const getPokemons = useContext(PokemonContext)

//     const pokemon = useContext(PokemonContext)

//   //   useEffect(()=>{
//   //     getPokemons();
//   // },[])

  const pokemon = usePokemonContext();

  return (
    <div className='table'>
      <div className='table-responsive'>
      <table className='table table-sm table-bordered'>
        <thead>
          <tr>
            <th>Quien es este Pokemon??, es...</th>
          </tr>
        </thead>
        <tbody>
          {pokemon && 
          pokemon.map((pokemon)=>(
            <tr key={pokemon.id}>
              <td>{pokemon.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}
