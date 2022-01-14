import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios'
import { IMAGE_API_URL, POKEMON_API_URL } from '../config'
import PokemonCard from '../components/PokemonCard'

const theme = createTheme({
    components: {
      MuiGrid: {
        styleOverrides: {
            root: {
                textAlign: "center",
                padding: "70px 10px 0px 10px",
                backgroundColor: "#852019"
            },
      },
      },
      },
  });

export default function Pokedex() {
    const [pokemonDataState, setPokemonDataState] = useState(null)
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
        <ThemeProvider theme={theme}>
        <Box>
            {pokemonDataState ? (
            <Grid container spacing={2}>
            {pokemonDataState.map((pokemon) => {
                return <PokemonCard pokemon={pokemon} image={pokemon.url} key={pokemon.id}/>
            })} 
            </Grid>
            ) : (<CircularProgress style={{marginTop: 100 }}/>)}
        </Box>
        </ThemeProvider>
        </>
    )
}
