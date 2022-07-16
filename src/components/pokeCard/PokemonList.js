import { PokemonContext } from '../../contextGlobal/PokemonContext';
import "./pokemonlist.css"
  import React , {useContext, useState}from 'react';
  import './pokemonlist.css'
  import Navbar from '../Navbar/Navbar';
  import '../Navbar/navbar.css'
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

    export default function PokemonList() {

      const {pokemon} = useContext(PokemonContext);
      const [ pokemonFiltrado, setPokemonFiltrado ] = useState({});
      const [traerImg, setTraerImg] = useState("si")
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => {
      setPokemonFiltrado(res.data);
    })

    const { i18n, t} = useTranslation();
    function changeLaguage(language) {
      i18n.changeLanguage(language);
    }

    return (
      <>
      <Navbar/>
        <div className='cardContainer'>   
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="260"
        image={
          pokemonFiltrado.sprites
          ?traerImg === "si"
            ? pokemonFiltrado.sprites.front_default :""
        :""}
        alt={pokemonFiltrado.pokemon}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemonFiltrado.pokemon}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {pokemonFiltrado.pokemon}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}

        {/* <div className='cardContainer'>
      <h4>{pokemonFiltrado.pokemon}</h4>
      </div>  */}
      

