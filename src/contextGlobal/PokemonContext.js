import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'
const initialState = {
          pokemon:"",
          img:"",
};

export const PokemonContext = createContext(initialState);

export const PokemonProvider = ({children}) => {

  const[pokemon,setPokemon] = useState("")
  // const [nombrePokemon, setNombrePokemon] = useState([])
  // const [cardPokemon, setCardpokemon] = useState([]);
 
  const handleChange = (NamePokemon) => {
    NamePokemon = NamePokemon.toLowerCase()
    setPokemon(NamePokemon)
  };

  // const [pokemonBuscado, setPokemonBuscado] = useState=("")
  // const [mostrarPokemon, setMostrarPokemon] = useState=([])

  // const getdata = async () => {
  //   await axios.get('https://pokeapi.co/api/v2/pokemon')
  //   .then((res) => {
  //     mostrarPokemon(res.data.results);
  //   }).catch((err) => {
  //     console.log("Este pokemon no existe")
  //   });  
  // useEffect([], {getdata})

  return(
    <PokemonContext.Provider value={{pokemon,handleChange}}>
      {children}
    </PokemonContext.Provider>
  )
}

// const filtrar=(terminoBusqueda)=> {
//   var busquedaResult=img.filter((elemento)=>{
//       if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
//         return elemento;  
//       } else {
//         return alert('exte pokemon no exite')
//       }
//   });
//   setPokemon(busquedaResult);
// }


  //////////////////////////////////////////////////////////
//   const [pokemon, setPokemon] = useState([initialState]);
//   const [cardPokemon, setCardpokemon] = useState([]);
//   const [search, setSearch] = useState("");

// const getPokemons = async () => {
//             await axios.get('https://pokeapi.co/api/v2/pokemon')
//             .then(res =>{
//             console.log(res.data);
//             setPokemon(res.data);
//             setCardpokemon(res.data);
//         }).catch(error=>{console.log(error)
//         });
//         }
//         useEffect(()=>{
//             getPokemons();
//         },[])

//         const handleChange=e=>{
//     setSearch(e.target.value);
//     console.log("Busqueda:"+e.target.value)
// }


// const filtrar=(terminoBusqueda)=> {
//     var busquedaResult=cardPokemon.filter((elemento)=>{
//         if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
//           return elemento;  
//         }
//     });
//     setPokemon(busquedaResult);
// }
        
// return (
//   <PokemonContext.Provider value={{handleChange,filtrar,search,pokemon,setPokemon,setSearch,getPokemons}}>
//           {children}
//   </PokemonContext.Provider>
// )}


// , 

