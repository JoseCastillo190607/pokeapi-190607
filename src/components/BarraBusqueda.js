import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import React from 'react'
// import PokemonContext from '../context/Pokemons/PokemonContext'
// import { useContext } from 'react'
import { usePokemonTablaContext } from './PokemonProvider';


export default function BarraBusqueda() {
    

const busqueda = usePokemonTablaContext();
const handleChange = usePokemonTablaContext();
const filtrar = usePokemonTablaContext();


    return (
        <div>
            <div className='container-Input'>
                <span>
                    <input 
                        className='form-control inputBuscar'
                        value={busqueda}
                        placeholder='Pikachu'
                        onChange={handleChange,filtrar}
                    /></span>
                <span>
                    <button className='btn btn-success' justify='center'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </span>
            </div>
        </div>
    )
}
