import {
	BrowserRouter as Router,
	Navigate,
	Routes,
	Route,
} from "react-router-dom"; import Layout from './components/Layout';
import PokemonList from './components/pokeCard/PokemonList';
import BarraBusqueda from './components/barraBusqueda/BarraBusqueda'
import { PokemonContext, PokemonProvider } from './contextGlobal/PokemonContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import { I18nextProvider } from "react-i18next";
import i18n from "./config/localization/i18n";
import About from "./components/About/About"
import { useTranslation } from "react-i18next";

const App = () => {

	return (

		<I18nextProvider i18n={i18n}>

			<PokemonProvider>
				<Router>
					<Routes>
						{/* <Route exact path='/' name='Navegacion' render={() => <Navbar />} /> 


						<Route exact path='/' name='Layout' render={() => <Layout />} />

						 <Route exact path='/Busqueda' name='PokemonList' render={() => <BarraBusqueda />} />

						<Route exact path='/Busqueda' name='PokemonList' render={() => <PokemonList />} />

						<Route exact path='/matricula' name="About" render={() => <About />} /> */}
						<Route path="/" element={<Navbar/>}/>
						<Route path="/" element={<Layout/>}/>
						<Route path="/Busqueda" element={<BarraBusqueda/>}/>
						<Route path="/Busqueda" element={<PokemonList/>}/>
						<Route path="/matricula" element={<About/>}/>
						
						{/* <Route path="*" element={<Navigate replace to="/pokemons" />} />

						<Route path="/" element={<Navigate replace to="/pokemons" />} /> */}
					</Routes>



				</Router>

			</PokemonProvider >
		</I18nextProvider>
	)

}

export default App;
