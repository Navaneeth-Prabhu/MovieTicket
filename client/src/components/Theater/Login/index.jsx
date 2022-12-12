// import React, { useState, useEffect } from "react";
// import axios from "../../../axios/axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { ToastContainer, toast } from "react-toastify";

// function Login() {
//   const [cookies] = useCookies([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (cookies.jwt) {
//       navigate("/theater");
//     }
//   },[cookies,navigate] );

//   const [values, setValues] = useState({ email: "", password: "" });
//   const generateError = (error) =>
//     toast.error(error, {
//       position: "bottom-right",
//     });
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "/theater/login",
//         {
//           ...values,
//         },
//         { withCredentials: true }
//       );
//       if (data) {
//         if (data.errors) {
//           const { email, password } = data.errors;
//           if (email) generateError(email);
//           else if (password) generateError(password);
//         } else {
//           navigate("/theater");
//         }
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   };
//   return (
//     <div className="container">
//       <h2>Login to your Account</h2>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={(e) =>
//               setValues({ ...values, [e.target.name]: e.target.value })
//             }
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={(e) =>
//               setValues({ ...values, [e.target.name]: e.target.value })
//             }
//           />
//         </div>
//         <button type="submit">Submit</button>
//         <span>
//           Don't have an account ?<Link to="/reg"> Register </Link>
//         </span>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Login;

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
import React, { useState, useEffect } from "react";
import axios from "../../../axios/axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";


const theme = createTheme();

export default function SignIn() {

  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/theater");
    }
  },[cookies,navigate] );

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "/theater/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          console.log("data",data);
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if
           (password) generateError(password);
           else if(data.errors === "blocked"){
            toast.error("Sorry you dont have permission to enter", { position: "bottom-right" })
           }
        } else {
          navigate("/theater");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
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
            Sign in
          </Typography>
          <form  onSubmit={(e) => handleSubmit(e)}>

          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type={'email'}
               onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={'password'}
              id="password"
              autoComplete="current-password"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/theater/reg" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
          
              </Grid>
            </Grid>
          </Box>
          </form>
          <ToastContainer />
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}