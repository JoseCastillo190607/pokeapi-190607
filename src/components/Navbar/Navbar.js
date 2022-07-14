import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import './navbar.css'
import pokeball from '../img/pokeball.png'
export default function Navbar() {

  return (
    <div justify="center" className="nav">
                    <div className="fondo">
      <Box className="box" justifyContent={'center'} sx={{ flexGrow: 1 }}>
        <AppBar className="navbar" position="static">
          <Toolbar><Typography>
            <div justifyContent="center" className="searchContainer">
              <div justifyContent="center" className="pokedex__header-title">
                <h1>POKEDEX 190607</h1>
              </div>
            </div>
          </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link className="navbar-brand" to="/pokemons">
                pokedex    
              </Link>
              <Link className="navbar-brand" to="/matricula">
                About
              </Link>
              <Link className="navbar-brand" to="/pokemons">
              </Link>
              <Link className="navbar-brand" to="/pokemons">
              </Link>
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
              sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
            >
              <Link className="navbar-brand" to="/matricula">
                About
              </Link>

              {/* <button onClick={()=>{changeLaguage("en")}}>en</button>
          <button onClick={()=>{changeLaguage("es")}}>es</button> */}
            </Typography>
            <Typography >
            <div className="pokedex__header-search">
					<div className="pokedex__header-aline"> 
					<div className="arrow-leftContentInput">
						<form className='arrow-leftImg' action="" id="searchPokemon">
							<input
								className="form-control"
								
								type="search"
								placeholder="Search"
								aria-label="Search"
                
								pattern="[A-Za-z ]"
								onChange={(event) => {
									// SetNameNum(event.target.value);
									// handleChange(event.target.value)
								}}
							/>
						</form>
							{/* </form> */}
						</div>
						<div className="arrow-leftContentImg">
						<form className='arrow-leftImg' action="" id="searchPokemon">
								<Link to='/Busqueda'>
									<img src={pokeball} alt="pokeball" className='pokeImg'
										onClick={() => {
											// handleCount(NameNum.toString());
										}}
									/>
								</Link>
							</form>
						</div>
					</div>
          </div>  
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
    </div>
  )
};
