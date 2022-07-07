
// import React, {useReducer, useState} from "react"
// import PokemonReducer from "./PokemonReducer"
// import PokemonContext from "./PokemonContext"
// import axios from "axios"
// import { useEffect } from "react"

// const PokemonStateGlobal = (props) => {
//     const initialState = {
//         pokemon: [],
//         // selectedPokemon: null, 
   

//     }
//     const [pokemon, setPokemon] = useState ([]);
//     const [cardPokemon, setCardpokemon] = useState ([]);
//     const [busqueda, setBusqueda] = useState ("");
 
//     //////////////////////////////////////////////////////////

    // const getPeticion = async () => {
    //     await axios.get('https://pokeapi.co/api/v2/pokemon')
    //     .then(res=>{
    //         setPokemon(res.data);
    //         setCardpokemon(res.data);
    //     }).catch (error=> {
    //         console.log(error);
    //     });
    // }

    // useEffect(()=>{
    //     getPeticion();
    // },[])
    
    // const [state,setstate] = useState(initialState)
   
//     //////////////////////////////////////////////////////////////

//     const [state, dispatch] = useReducer(PokemonReducer, initialState)

//     const getPokemons = async () => {
//         await axios.get('https://pokeapi.co/api/v2/pokemon')
//         .then(res =>{
//         console.log(res.data);
//         setPokemon(res.data);
//         setCardpokemon(res.data);
//     }).catch(error=>{console.log(error)
//     });
//     }
//     useEffect(()=>{
//         getPokemons();
//     },[])

//     const handleChange=e=>{
//         setBusqueda(e.target.value);
//         console.log("Busqueda:"+e.target.value)
//     }

//     const filtrar=(terminoBusqueda)=> {
//         var busquedaResult=cardPokemon.filter((elemento)=>{
//             if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
//               return elemento;  
//             }
//         });
//         setPokemon(busquedaResult);
//     }


// ///////////////////////////////////////////////////////////////////////   

    // const getProfile = async (id) => {
    //     await axios.get('https://pokeapi.co/api/v2/pokemon' + id)
    //     .then(res =>{
    //     console.log(res.data);
    //      }).catch(error=>{console.log(error)
    // });
    // }

    // useEffect(()=>{
    //     getProfile();
    // },[])

// /////////////////////////////////////
   
//     return(
//         <PokemonContext.Provider value={{
//             pokemon: state.pokemon,
//             // selectedPokemon: state.selectedPokemon,
//             getPokemons,
//             // getProfile,
//             // getPeticion,
//             handleChange,
//             filtrar
//         }}>
//             {props.children}
//         </PokemonContext.Provider>
//     )

// }

// export default PokemonStateGlobal;