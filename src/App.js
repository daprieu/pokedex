import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppNav from './components/AppNav'
import Pokedex from './containers/Pokedex'
export default function App() {
  return (
    <Router>
        <AppNav/>
      <Routes>
      <Route path="/" element={<Pokedex/>}/>
      </Routes>
    </Router>
  )
}
