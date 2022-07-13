import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { useContext, useEffect,  } from 'react'
import { PokemonContext } from '../../contextGlobal/PokemonContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./barraBusqueda.css"
import axios from 'axios'

export default function BarraBusqueda() {

    const { handleChange,filtrar} = useContext(PokemonContext)
    const [search, setSearch] = useState("");
    const [cardPokemon, setCardpokemon] = useState([]);

    // const classes = useStyles()
	const [pokemon, setPokeNum] = useState(0);
	const [pokedata, setPokeData] = useState("");
	const [pokedataesp, setPokeDataESP] = useState([]);


	const getdata = () => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/`)
			.then((res) => {
				setPokeData(res.data.results);
                setPokeDataESP(res.data.results);

			});
	};

	useEffect(getdata, [pokemon]);

    // const pokemonFiltrado = (busqueda)=> {
    //     var busquedaResult= pokedataesp.filter(())
    // }

	useEffect(() => {
		setPokeDataESP([]);
		if (pokedata.length >= 1) {
			pokedata.map((item) => {
				axios.get(`${item.url}`).then((data) => {
					setPokeDataESP((current) => [...current, { data: data.data }]);
					console.log(data.data);
					if (pokedataesp >= 1) {
						return pokedataesp;
					}
				});
			});
		}
	}, [pokedata]);


    // const filtrarPokemon=(terminoBusqueda)=> {
    //       var busquedaResult=pokedataesp.filter((elemento)=>{
    //           if(elemento.data.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    //            || elemento.data.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
    //           {
    //             return elemento;  
    //           }
    //       });
    //       setPokeNum(busquedaResult);
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
                            // filtrarPokemon(e.target.value);
                            console.log("Busqueda:" + e.target.value)

                        }}
                    /></div>



            </div><button className='btn btn-success' justify='center' onClick={() => {
                            { handleChange(search.toString()) };
                            // {filtrarPokemon(search.toString())}
                            
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
