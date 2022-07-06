import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';
import ProfilePokemon from './components/ProfilePokemon';
const App = () => {
	return (
		<>
			<Router>
					<Switch>
						<Route exact path='/' name='Layout' render={() => <Layout />} />
					</Switch>
					<Switch>
						<Route exact path='/PokemonProfile' render={() => <ProfilePokemon/>}/>
					</Switch>

			</Router>
		</>
	)

}

export default App;
