import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import popcorn from '../images/popcorn.png';
import logo from '../images/clique_logo.PNG';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: "white",
    },
    image: {
        backgroundImage: `url(${popcorn})`,
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
  

function Signup()
{
    const classes = useStyles();
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [confpass,setConfpass] = useState('')


    const [usernameError,setUsernameError] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [passError,setPassError] = useState(false)
    const [confpassError,setconfpassError] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUsernameError(false)
        setEmailError(false)
        setPassError(false)
        setconfpassError(false)

        if(username=='')
        {
            setUsernameError(true)
        }
        if(email=='')
        {
            setEmailError(true)
            
        }
        if(pass=='')
        {
            setPassError(true)
        }
   
        if(confpass=='')
        {
            setconfpassError(true)
            
        }
        
        if(username && email && pass && confpass)
        {
            console.log(username,email)
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
                 Sign Up
            </Typography>

            <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              onChange={(e) =>setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
              error={usernameError}
           
            />
            <TextField
              onChange={(e) =>setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailError}
           
            />
            <TextField
             onChange={(e) =>setPass(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={passError}
            />
            <TextField
             onChange={(e) =>setConfpass(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirm_password"
              autoComplete="current-password"
              error={confpassError}
            />

             <Button
              type="submit"
              fullWidth
              variant="contained"
              
              className={classes.submit}
            >
              Sign Up
            </Button>
           
            </form>
            </div>
            </Grid>
        </Grid>


    ) 
}
export default Signup