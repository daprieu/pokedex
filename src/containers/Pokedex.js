import React, { useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
import axios from 'axios'
import { IMAGE_API_URL, POKEMON_API_URL } from '../config'

export default function Pokedex() {
    let a
    const [pokemonDataState, setPokemonDataState] = useState([])
    console.log('pokemonDataState', pokemonDataState)
    useEffect(() => {
        axios.get(`${POKEMON_API_URL}?limit=800`).then((response) => {
            if(response.status >= 200 && response.status < 300){
                const { results } = response.data
                let newPokemonData = []
                results.forEach((pokemon, index) => {
                    index++
                    let pokemonObject = {
                        id: index,
                        url: `${IMAGE_API_URL}${index}.png`,
                        name: pokemon.name
                    }
                    newPokemonData.push(pokemonObject)
                });
                setPokemonDataState(newPokemonData)
            }
        })
    }, [])
    return (
        <>
        <Box>
            {pokemonDataState ? pokemonDataState.map((pokemon) => {
                return <h1 key={pokemon.id}>{pokemon.name}</h1>
            }) : <CircularProgress style={{marginTop: 100 }}/>}
        </Box>
        </>
    )
}
