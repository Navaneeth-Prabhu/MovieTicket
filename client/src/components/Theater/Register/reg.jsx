import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import axios from '../../../axios/axios';
import {useNavigate} from 'react-router-dom'
import {ToastContainer , toast} from 'react-toastify'


const theme = createTheme({
    palette: {
      primary: {
        main: '#7b1fa2'
      }
    //   secondary: red,/
    },
  });

export default function SignUp() {
    const navigate = useNavigate()
    const [values, setvalues] = useState({
        name:"",
        email:"",
        passwrod:"",
        address:"",
        theater:"",
        city:"",
        state:"",
    })

    const generateError = (err) =>toast.error(err,{position:"bottom-right"})
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const {data}= await axios.post("http://localhost:3001/theater/reg",{
                ...values,
            },{
                withCredentials:true,
            })
            if (data) {
                if (data.errors) {
                  const { email, password } = data.errors;
                  if (email) generateError(email);
                  else if (password) generateError(password);
                } else {
                  console.log();
                  navigate("/theater/login");
                }
              }
        }catch(err) {
            console.log(err.message);
        }
    }
  return (
      <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <Box   sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    {/* <input type="text" onChange={(e) =>
                      setvalues({ ...values, [e.target.name]: e.target.value })}
                  /> */}
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    type={'text'}
                    label="name"
              
                    onChange={(e) =>
                      setvalues({ ...values, [e.target.name]: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type={'text'}
                    label="Theater Name"
                    name="theater"
                    autoComplete="family-name"
                    onChange={(e) =>
                      setvalues({ ...values, [e.target.name]: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type={'text'}
                    label="Address"
                    name="address"
                    autoComplete="address"
                    onChange={(e) =>
                      setvalues({ ...values, [e.target.name]: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="city"
                    required
                    fullWidth
                        type={'text'}
                    label="City"
                    autoFocus
                    onChange={(e) =>
                      setvalues({ ...values, [e.target.name]: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                  type={'text'}
                    label="State"
                    name="state"
                    autoComplete="family-name"
                    onChange={(e) =>
                      setvalues({ ...values, [e.target.name]: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
              type={'email'}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) =>
                      setvalues({ ...values, [e.target.name]: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={'password'}
          
                    autoComplete="new-password"
                    onChange={(e) =>
                      setvalues({ ...values, [e.target.name]: e.target.value })}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color='primary'
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                <Link href="/theater/login" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              
                </Grid>
              </Grid>
            </Box>
  
            </form>
          </Box>
        </Container>
          <ToastContainer/>
  
     </ThemeProvider>

  </div>

  )
}

