import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../../contextGlobal/PokemonContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./barraBusqueda.css"

export default function BarraBusqueda() {

    const { handleChange,filtrar} = useContext(PokemonContext)
    const [search, setSearch] = useState("");
    // const [cardPokemon, setCardpokemon] = useState([]);


    // const filtrar=(terminoBusqueda)=> {
    //       var busquedaResult=cardPokemon.filter((elemento)=>{
    //           if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
    //             return elemento;  
    //           } else {
    //             return alert('exte pokemon no exite')
    //           }
    //       });
    //       setPokemon(busquedaResult);
    //     }
    return (
        <div>
            <div className='container-Input'>
                <div>
                    <input className='form-control inputBuscar'
                        value={search}
                        type='search'
                        placeholder='Pikachu'
                        onChange={(e) => {
                            setSearch(e.target.value);
                            // filtrar(e.target.value);
                            console.log("Busqueda:" + e.target.value)

                        }}
                    /></div>



            </div><button className='btn btn-success' justify='center' onClick={() => {
                            { handleChange(search.toString()) };
                            
                        }}>
                            <FontAwesomeIcon icon={faSearch} />

                        </button>
        </div>
    )

}

// const {search,handleChange,filtrar,pokemon,setPokemon,setSearch} = useContext(PokemonContext);
// // const {handleChange} = useContext(PokemonContext);
// // const {filtrar} = useContext(PokemonContext);
// // const {getpokemons} = useContext(PokemonContext);

//     return (
//         <div>
//             <div className='container-Input'>
//                 <span>
//                     <input
//                         className='form-control inputBuscar'
//                         value={search}
//                         placeholder='Pikachu'
//                         onChange={(e)=>{
//                         setSearch(e.target.value);
//                         console.log("Busqueda:"+e.target.value)
// }
//                         }
//                     /></span>
//                 <span>
//                     <button className='btn btn-success' justify='center'>
//                         <FontAwesomeIcon icon={faSearch} />
//                     </button>
//                 </span>
//             </div>
//         </div>
//     )
// }
