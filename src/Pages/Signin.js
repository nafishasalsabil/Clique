import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import man from '../images/man.jpg';
import logo from '../images/clique_logo.PNG';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: "white",
    },
    image: {
        backgroundImage: `url(${man})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: "white",
   
      
      backgroundPosition: 'center',
      
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#000000",
      color: "white",
      height: 50,
      borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
      '&:hover' : {
        color: "red",
        backgroundColor: "#000000",
        borderColor: "red",
      }

    },
    signupstyle: {
        fontFamily: "Lato",
    }
  }));
  

function Signin()
{
    const classes = useStyles();
    const [title,setTitle] = useState('')
    const [details,setDetails] = useState('')
    const [titleError,setTitleError] = useState(false)
    const [detailsError,setDetailsError] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)
        if(title=='')
        {
            setTitleError(true)
        }
        if(details=='')
        {
            setDetailsError(true)
            
        }
        
        if(title && details)
        {
            console.log(title,details)
        }
    }
    return(
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <img src={logo} alt="Logo" />
            <Typography variant="h3" component="h2" gutterBottom className={classes.signupstyle}>
                 Sign In
            </Typography>

            <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              onChange={(e) =>setTitle(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={titleError}
            //  className={classes.submit}
            />
            <TextField
             onChange={(e) =>setDetails(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={detailsError}
            />

             <Button
              type="submit"
              fullWidth
              variant="contained"
              
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container spacing={24} justify="center">
              <Grid item xs={6} align="center">
                <Link to={"/ForgotPassword"}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={6} align="center">
                  
                <Link to={"/Signup"} >
                  Don't have an account? Sign Up
                </Link>
               
              </Grid>
            </Grid>
            </form>
            </div>
            </Grid>
        </Grid>


    ) 
}
export default Signin