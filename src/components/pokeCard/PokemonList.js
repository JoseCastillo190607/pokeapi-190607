import React from 'react'
import { useContext } from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { PokemonContext } from '../../contextGlobal/PokemonContext';
import "./pokemonlist.css"

export default function PokemonList() {

  const { pokemon, imgPokemon } = useContext(PokemonContext)
  return (
    <div className='PokeCard-container'>
      <div className='Card-container'>
      <Card justify='center' sx={{ maxWidth: 345 }} className="card" className='card-disposition'>
        <Grid container md={48} xs={12} spacing={24} justify='center' >
          <Grid item md={48} xs={12} sm={4} key={pokemon} justifyItems='center'>
            <CardActionArea>
              <CardMedia
                component="img"
                height={500}
                width={1000}
                image={imgPokemon}
                alt={pokemon}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pokemon}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Grid>
        </Grid>
      </Card>
      </div>
    </div>
  )
}

// //     useEffect(()=>{
// //       getPokemons();
// //   },[])

  // const {pokemon} = useContext(PokemonContext);

  // return (
//     <div className='table'>
//        <div className='table-responsive'>
//        <table className='table table-sm table-bordered'>
//         <thead>
//           <tr>
//             <th>Quien es este Pokemon??, es...</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pokemon &&
//           pokemon.map((pokemon)=>(
//             <tr key={pokemon.id}>
//               <td>{pokemon.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
//     </div>
//   )
// }

// export default function ProfilePokemon() {

