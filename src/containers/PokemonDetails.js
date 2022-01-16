import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { POKEMON_API_URL } from '../config'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './PokemonDetails.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

const theme = createTheme({
    components: {
      Mui: {
        styleOverrides: {
          root: {
              
        },
      },
      },
      },
  });

export default function PokemonDetails() {
    const [pokemonDetailsState, setState] = useState(null)
    console.log('pokemonDetailsState', pokemonDetailsState)
    let {pokemonId} = useParams()
    console.log('pokemonId', pokemonId)
    
    
    useEffect(() => {
        axios.get(`${POKEMON_API_URL}/${pokemonId}`).then((res) => {
            if(res.status >= 200 && res.status < 300) {
                setState(res.data)
            }
        }) 
    }, [])
        
        if(pokemonDetailsState) {
            return (
            <Box>
                <Box style={{height: '85vh', backgroundColor: 'black', marginTop: 75, textAlign: "center", borderRadius: 5,
            paddingTop: 30 }}>
                    <Typography style={{color: 'white', textTransform: 'uppercase', fontFamily: "fantasy" }} variant='h1'>{pokemonDetailsState.name}</Typography>
                    <img className='PokemonImg' src={pokemonDetailsState.sprites.front_default}/>
                    <Box style={{bottom:60, position:'absolute', width: '100%' }}>
                        <hr style={{height: '0.01mm', width: '95%'}} /> 
                        <Grid container >
                            <Grid item md={1}>
                                <Button style={{height:50, width:100, margingTop:15 }}>
                                    <FavoriteIcon style={{ color: 'white', fontSize: 50}}/>
                                </Button>
                            </Grid>
                            <Grid item md={2}>
                                <Typography style={{fontSize: 30, color: 'white'}}>
                                    Name <br/>
                                    {pokemonDetailsState.name}
                                </Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Typography style={{fontSize: 30, color: 'white'}}>
                                    Height <br/>
                                    {pokemonDetailsState.height}m
                                </Typography>
                            </Grid>
                            <Grid item md={2}>
                                <Typography style={{fontSize: 30, color: 'white'}}>
                                    Weight <br/>
                                    {pokemonDetailsState.weight}m
                                </Typography>
                            </Grid>
                            {pokemonDetailsState.types.map((pokemonType) => {
                            return (
                                <Grid item md={2}>
                                <Typography style={{fontSize: 30, color: 'white'}}>
                                    Type <br/>
                                    {pokemonType.type.name}
                                </Typography>
                            </Grid>
                                )    
                            })}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        )
        } else {
            return <CircularProgress></CircularProgress>
        }
        
    }

;

