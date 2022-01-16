import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppNav from './components/AppNav'
import Pokedex from './containers/Pokedex'
import PokemonDetails from './containers/PokemonDetails'


export default function App() {
  return (
    <Router>
        <AppNav/>
      <Routes>
      <Route exact path="/" element={<Pokedex/>}/>
      <Route exact path="/pokemon/:pokemonId" element={<PokemonDetails/>}></Route>
      </Routes>
    </Router>
  )
}
