import React, { useState, createContext } from 'react'

const initialState = {
          pokemon:"",
          img:"",
};

export const PokemonContext = createContext(initialState);

export const PokemonProvider = ({children}) => {

  const[pokemon,setPokemon] = useState("")
  const [img, setImg] = useState([])
  const [cardPokemon, setCardpokemon] = useState([]);
  const imgPokemon = (pokeImage) => (
      pokeImage= pokeImage.pokedataesp.map((poke, name) => (
        //key={name},
        poke.data.sprites.front_default
      )),
      setImg(pokeImage)
    );
  const handleChange = (NamePokemon) => {
    NamePokemon = NamePokemon.toLowerCase()
    setPokemon(NamePokemon)
  };

  
  return(
    <PokemonContext.Provider value={{pokemon,handleChange,imgPokemon}}>
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

