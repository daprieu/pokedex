import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
            backgroundColor: "black", 
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: "rgb(90, 90, 90)" 
            },
      },
    },
    },
    MuiCardMedia: {
        styleOverrides: {
            root: {
                margin: "auto",
                width: 130,
                height: 130,
                },
            },
        },
    },
});


export default function PokemonCard(props) {

    const { pokemon, image } = props
    const { id, name } = pokemon
    return (
    <ThemeProvider theme={theme}>
        <Grid item xs={12} sm={2}>
         <Link to={"/pokemon/" + id} style={{textDecoration: 'none'}}>
            <Card >
                <CardMedia  image={image}></CardMedia>
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
         </Link>
        </Grid>
    </ThemeProvider>
    )
}
