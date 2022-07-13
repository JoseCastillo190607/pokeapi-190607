import React, { useState, useEffect } from 'react'
import { Typography, Paper, Container, Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import './layout.css'
import pokeball from '../img/pokeball.png'
import { Link } from 'react-router-dom'


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
		marginTop: theme.spacing(12)
	},
	card: {
		maxWidth: 350,
		background: 'linear-gradient(45deg, #AE64F3 20)'
	},
	imagePoke: {
		height: 250,
		Justify: 'center',
	}
}))

const Layout = () => {

	const classes = useStyles()
	const [pokemon, setPokeNum] = useState(0);
	const [pokedata, setPokeData] = useState("");
	const [pokedataesp, setPokeDataESP] = useState([]);




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
			<div className="pokedex-container">
				<div className="pokedex__header">
					<div className="pokedex__header-title">
						<h1>POKEDEX 190607</h1>
					</div>


					<div className="pokedex__header-aline">
						<div className="arrow-leftContent">

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
						<div className="arrow-rightContent" >

						</div>

						<div className="pokedex__header-search">
							<form action="" id="searchPokemon">
								<Link to='/Busqueda'> 
									<img src={pokeball} alt="pokeball" className='pokeImg' />
								</Link>
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

				<Container maxWidth='lg' component={Paper} elevattion={4} className={classes.container}>
					<Card container spacing={2}>
						<Grid container spacing={2} justify='center' >
							{pokedataesp.map((poke, index) => (
								<Grid item xs={12} sm={4} key={index}>
									<CardActionArea>
										<CardContent>
											<CardMedia >
												<img justify='center'
													src={

														poke.data.sprites.front_default
													}
													className={classes.imagePoke}
													alt="No image"
												/>

											</CardMedia>
											<Typography align='center' variant='h4'>{`${poke.data.id}`}</Typography>
											<Typography align='center' variant='h4'>{`${poke.data.name}`}</Typography>
										</CardContent>
									</CardActionArea>
								</Grid>
							))}
						</Grid>
					</Card>
				</Container>
			</div>
		</div>
	)
}

export default Layout