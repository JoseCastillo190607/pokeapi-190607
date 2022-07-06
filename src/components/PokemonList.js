import React, {useEffect} from 'react'
import { useContext } from 'react'
import PokemonContext from '../context/Pokemons/PokemonContext'
export default function PokemonList() {

    const { getPokemons } = useContext(PokemonContext)

    useEffect(() => {
        getPokemons();
    },[])

  return (
    <div>
      
    </div>
  )
}
