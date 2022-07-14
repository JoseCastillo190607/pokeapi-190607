import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import PokemonList from './components/pokeCard/PokemonList';
import BarraBusqueda from './components/barraBusqueda/BarraBusqueda'
import { useContext } from 'react';
import { PokemonContext, PokemonProvider } from './contextGlobal/PokemonContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';


import { NavigateBeforeSharp } from '@material-ui/icons';
// import ProfilePokemon from './components/ProfilePokemon';
// import PokemonProvider from './components/PokemonProvider';

//Context
// import PokemonsState from  './context/Pokemons/PokemonStateGlobal'
// import PokemonContext from './context/Pokemons/PokemonContext';

const App = () => {

	return (
		<PokemonProvider>
			<Router>
				<Switch>
					<Route exact path='/' name='Navegacion' render={() => <Navbar />} />
				</Switch>
				<Switch>
					<Route exact path='/' name='Layout' render={() => <Layout />} />
				</Switch>
				<Switch>
					<Route exact path='/Busqueda' name='PokemonList' render={() => <BarraBusqueda />} />
				</Switch>
				<Switch>
					<Route exact path='/Busqueda' name='PokemonList' render={() => <PokemonList />} />
				</Switch>
			</Router>
		</PokemonProvider>
	)

}

export default App;
