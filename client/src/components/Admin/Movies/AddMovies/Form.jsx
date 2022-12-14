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
// import axios from "../../../axios/axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

import { useForm } from "react-hook-form";
import axios from "../../../../axios/axios"

import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const ErrorText = ({ children, ...props }) => (
  <Typography sx={{ color: "error.main" }} {...props}>
    {children}
  </Typography>
);

export default function FormMovie() {

  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);




  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    console.log("helo",data);
    const formData = new FormData();
    
    await axios.post("http://localhost:3001/admin/movieinfo",data)

    // formData.append("image", data.file[0]);
    // axios
    //   .post("/admin/movies/addMovies", data)
    //   .then(async(response) => {
    //     console.log(response.data._id);
    //     let id = response.data._id
    //     await axios.post(`/api/admin/movieImage/upload/${id}`,formData,{
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }).then(({data})=>{
    //       console.log(data)
    //     }
    //     )
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };


  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  
  return (
    <ThemeProvider >
      <Container component="main" maxWidth="xm">
        {/* <CssBaseline /> */}
  
   
          <Typography component="h1" variant="h5">
            AddMovie
          </Typography>
          <form  onSubmit={handleSubmit(onSubmit)}>

          <Box noValidate>
            <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item lg={6} xs={12}>
                <TextField variant="filled" label="Name" color="secondary" focused fullWidth margin='normal'  {...register("title", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}/>
                </Grid>
                <Grid item xs={12} lg={6}>
                <TextField variant="filled" label="Discription" color="secondary" focused fullWidth multiline margin='normal'  {...register("discription", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}/>
                   <span className="text-danger">
                  {errors.name?.type === "required" && (
                    <span>name is required</span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span>name must morethan or equal to 4 Character</span>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <span>name must less than 20 Character</span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span>Should not have spaces</span>
                  )}
                </span>
                </Grid>
                <Grid item xs={12} lg={6}>
                <TextField variant="filled" label="Genre" color="secondary" focused fullWidth margin='normal'  {...register("Genre", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}/>
                   <span className="text-danger">
                  {errors.name?.type === "required" && (
                    <span>name is required</span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span>name must morethan or equal to 4 Character</span>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <span>name must less than 20 Character</span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span>Should not have spaces</span>
                  )}
                </span>
                </Grid>
                <Grid item xs={12} lg={6}>
                <TextField variant="filled" label="Director" color="secondary" focused fullWidth margin='normal'  {...register("director", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}/>
                   <span className="text-danger">
                  {errors.name?.type === "required" && (
                    <span>name is required</span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span>name must morethan or equal to 4 Character</span>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <span>name must less than 20 Character</span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span>Should not have spaces</span>
                  )}
                </span>
                </Grid>

                <Grid item xs={12} lg={12}>
                <TextField variant="filled" label="Youtube Link" color="secondary" focused fullWidth margin='normal'{...register("youtubeLink", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}/>
                       <span className="text-danger">
                  {errors.name?.type === "required" && (
                    <span>name is required</span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span>name must morethan or equal to 4 Character</span>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <span>name must less than 20 Character</span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span>Should not have spaces</span>
                  )}
                </span>
                </Grid>



                
            </Grid>
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{background:'red'}}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
               
          
              </Grid>
            </Grid>
          </Box>
          </form>
          <ToastContainer />
       
       
      </Container>
    </ThemeProvider>
  );
}