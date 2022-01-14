import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    //This is not working added style prop to <AppBar/>
    // AppBar: {
    //     background: "pink",
    // },
    link: {
        textDecoration: "none",
    },
    title: {
        cursor: 'pointer',
        color: 'white',
    }
}))

export default function AppNav() {
    const classes = useStyles()
    return (
        <AppBar className={classes.AppBar} style={{backgroundColor: 'black' }} position='fixed' >
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title} variant='h6'>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
