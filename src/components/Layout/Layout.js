import React, { useState, useEffect,useRef } from 'react'
import {CssBaseline, IconButton, Typography, Button, Drawer, Paper, Divider, Container, Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import Logo from './icon.jpg'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import './layout.css'
import pokeball from '../img/pokeball.png'


const useStyles = makeStyles(theme => ({
	paper: {
		width: 240
	},
	div: {
		padding: 20,
		display: 'flex',
		alignItems: 'center'
	},
	logo: {
		height: 60,
		marginLeft: 30,
		marginRight: 'auto'
	},
	footer: {
		bottom: 0,
		position: 'fixed',
		width: '100%'
	},
	container: {
		marginTop: theme.spacing(15)
	},
	card: {
		maxWidth: 350,
		background: 'linear-gradient(45deg, #AE64F3 20)'
	},
	imagePoke: {
		height: 250
	}
}))

const Layout = () => {

const [pokemon, setPokeNum] = useState(0);
const [pokedata, setPokeData] = useState("");
const [pokedataesp, setPokeDataESP] = useState([]);
const [Shini, setShini] = useState(0);
const [mostrar, setMostrat] = useState(0);

const getdata = () => {
  axios
	.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${pokemon}`)
	.then((res) => {
	  setPokeData(res.data.results);
	});
};

useEffect(getdata, [pokemon]);

useEffect(() => {
  setPokeDataESP([]);
  if (pokedata.length >= 1) {
	pokedata.map((item) => {
	  axios.get(`${item.url}`).then((data) => {
		setPokeDataESP((current) => [...current, { data: data.data }]);
		console.log(data.data);
		if (pokedataesp >= 10) {
		  return pokedataesp;
		}
	  });
	});
  }
}, [pokedata]);

	return (
		<div className='pokemonContenedor'>
<div class="pokedex-container">
        <div class="pokedex__header">
            <div class="pokedex__header-title">
                <h1>POKEDEX 190607</h1>
            </div>
           
            
            <div class="pokedex__header-aline">
                <div class="arrow-leftContent">
        
				</div>
        <input
          className="arrow-left"
          type="button"
          value="Pagina Anterior"
          onClick={(event) => {
            if (pokemon <= 0) {
              setPokeNum(Number(1116));
            } else {
              setPokeNum(Number(pokemon) - 10);
            }
          }}
        />
                <div class="arrow-rightContent" >
         
          </div>  

		  <div class="pokedex__header-search">
                <form action="" id="searchPokemon">
                    <button 
					type="button"
					onClick={(event) => {
					   if (pokemon >= 1125) {
						 setPokeNum(Number(0));
					   } else {
						 setPokeNum(Number(pokemon) + 10);
					   }
					 }}>
                        <img src={pokeball} alt="pokeball"/>
                    </button>

                </form>
            </div>

             <input
          className="arrow-right"
          type="button"
          value="Pagina Siguiente"
          onClick={(event) => {
            if (pokemon >= 1125) {
              setPokeNum(Number(0));
            } else {
              setPokeNum(Number(pokemon) + 10);
            }
          }}
        />
            </div>
        </div>
    </div>
	

			  <div className="text-center">
      </div>
      <table className="table table-danger table-striped">
       
        <tbody>
          {pokedataesp.map((poke, index) => (
            <tr key={index}>
              <td>{`${poke.data.id}`}</td>
              <td>{`${poke.data.name}`}</td>
              <td>
                <img
                  src={
                    
                        poke.data.sprites.front_default
                  }
                  alt="No image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
		</div>
	)
}

export default Layout