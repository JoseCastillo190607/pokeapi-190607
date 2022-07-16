import {
	BrowserRouter as Router,
	Navigate,
	Routes,
	Route,
} from "react-router-dom";
import { PokemonContext, PokemonProvider } from './contextGlobal/PokemonContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import PokemonList from "./components/pokeCard/PokemonList"
import { I18nextProvider } from "react-i18next";
import i18n from "./config/localization/i18n";
import About from "./components/About/About";
import Layout from "./components/Layout"
import { useTranslation } from "react-i18next";
import paisaje from "./components/img/paisaje.png"
import gif from "./components/img/pokemon-buneary.gif"
import MatriculaContext from "./contextGlobal/MatriculaContext";


const aboutData={
	nombre: "Jose Gpe Castillo Sanchez",  
matricula: "190607",
}

const App = () => {

	return (
		<div>
		<div className="ContainerBack">
		<I18nextProvider i18n={i18n}>
			<MatriculaContext.Provider value={aboutData}>
			<PokemonProvider>
				<Router>
					<Routes>
						{/* <Route path="/pokemon" element={<Navbar />} /> */}
						<Route path="/pokemon" element={<Layout />}/>	
						<Route path="/pokemonInfo" element={<PokemonList/>}/>
						<Route path="/190607" element={<About />} />
						{/* <Route path="*" element={<Navigate replace to="/pokemon" />} />
        			  	<Route path="/" element={<Navigate replace to="/pokemon" />} />		 */}
					</Routes>
				</Router>
			</PokemonProvider >
			</MatriculaContext.Provider>
		</I18nextProvider>
		</div>
		</div>
	)

}

export default App;
