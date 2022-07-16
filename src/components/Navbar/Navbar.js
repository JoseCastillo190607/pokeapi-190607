import React, {useContext,useState} from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import pokeball from '../img/pokeball.png'
import usaFlag from '../img/en.png';
import mxFlag from '../img/es.png'
import { useTranslation } from "react-i18next";
import { PokemonContext } from '../../contextGlobal/PokemonContext';

export default function Navbar() {

  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }

  console.log(i18n.language)

  
    // const [search, setSearch] = useState("");
    // const { handleChange} = useContext(PokemonContext)

  const {handleChange} = useContext(PokemonContext)
  const [search, setSearch] = useState("")

  return (
    <div justify="center" className="nav">
      <div className="fondo">
        <Box className="box" >
          <AppBar className="navbar" position="static">
            <Toolbar><Typography>
              <div justifyContent="center" className="searchContainer">
                <div justifyContent="center" className="pokedex__header-title">
                  <Link to="/pokemon">
                  <h1 className="PokedexH1" text-decoration="none" >POKEDEX 190607</h1>
                  </Link>
                </div>
              </div>
            </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link className="navbar-brand" to="/pokemon">
                  {t("title")}
                </Link>
                <Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/>
                <Link className="navbar-brand" to="/190607">
                  {t("About")}
                </Link>
               
                <Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/>
                 <Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/>
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link className="navbar-brand" to="/pokemons">

                </Link>
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Link className="navbar-brand" to="/matricula">
                </Link>
              </Typography>
              <Typography >
                <div className="pokedex__header-search">
                  <div className="pokedex__header-aline">
                    <div className="arrow-leftContentInput">
                      <form className='arrow-leftImg' action="" id="searchPokemon">
                        <input
                          className="form-control"
                          type="search"
                          placeholder={t("placeHolderEn")}
                          aria-label={t("placeHolderEn")}

                          pattern="[A-Za-z ]"
                          onChange={(e) => {
                            
                            setSearch(e.target.value);
                            console.log("Busqueda:" + e.target.value)

                        }}
                       
                        />
                      </form>
                    </div>
                    <div className="arrow-leftContentImg">
                      <form className='arrow-leftImg' action="" id="searchPokemon">
                        <Link to='/pokemonInfo'>
                          <img src={pokeball} alt="pokeball" className='pokeImg'
                            onClick={() => {
                              handleChange(search.toString());
                            }}
                          />
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </Typography>
              <Typography variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}>
                  <Link className="navbar-brand" to="/matricula"/><Link className="navbar-brand" to="/matricula"/>
                <Link className="navbar-brand" to="/matricula"></Link>
                < img className={`imgFlag${
            i18n.language === "en" ? "selected" : "unselected"
          }`} alt="en" src={usaFlag} width={50} height={45}  
           onClick={() => { changeLaguage("en") 
           }}></img>
                <img className={`imgFlag${
            i18n.language === "es" ? "selected" : "unselected"
          }`} alt="es" src={mxFlag} width={50} height={45} onClick={() => { changeLaguage("es") 
          }}></img>
          <Link className="navbar-brand" to="/matricula"/>          <Link className="navbar-brand" to="/matricula"/>          <Link className="navbar-brand" to="/matricula"/>          <Link className="navbar-brand" to="/matricula"/>


              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  )
};
