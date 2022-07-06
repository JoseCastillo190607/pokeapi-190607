import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import ProfilePokemon from './components/ProfilePokemon';

//Context
import PokemonsState from  './context/Pokemons/PokemonStateGlobal'

const App = () => {
	return (
		<PokemonsState>
			<Router>
					<Switch>
						<Route exact path='/' name='Layout' render={() => <Layout />} />
					</Switch>
			</Router>
			<ProfilePokemon/>
		</PokemonsState>
	)

}

export default App;
