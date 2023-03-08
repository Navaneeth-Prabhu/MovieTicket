import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
// import axios from "../../../axios/axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

import { useForm } from "react-hook-form";
import axios from "../../../../axios/axios";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import './index.css'
import UploadWidget from './UploadWidget';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ErrorText = ({ children, ...props }) => (
  <Typography sx={{ color: "error.main" }} {...props}>
    {children}
  </Typography>
);

const top100Films = [
  { Gener: "Action" },
  { Gener: "Romance" },
  { Gener: "Dramas" },
  { Gener: "Thriller" },
  { Gener: "Horror" },
  { Gener: "Sci-fi" },
  { Gener: "Fantasy" },
];

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
const URL = "/api/admin/movieImage/upload";

export default function FormMovie() {
  const [url, updateUrl] = useState();
  const [error, updateError] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // params,
    formState: { errors },
  } = useForm();

  function handleOnUpload(error, result, widget) {
    if ( error ) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }

  const onSubmit = async (data) => {
    const formData = new FormData();

    // formData.append("image", data.file[0]);
    await axios
      .post("http://localhost:3001/admin/movieinfo", data)
      .then(async (response) => {

        // let id = response.data._id;
        // const data = await axios.post('https://api.cloudinary.com/v1_1/navaNeeth/image/upload',formData.then((response)=>{
        //   data = response.data['secure_url']
        // }))
   
        navigate("/admin/movies");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const generateError = (error) =>
  //   toast.error(error, {
  //     position: "bottom-right",
  //   });

  return (
    <ThemeProvider>
      <Container component="main" maxWidth="xm" color="secondary">
        {/* <CssBaseline /> */}
        <Typography component="h1" variant="h5">
          AddMovie
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box noValidate>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item lg={6} xs={12}>
                <div>
                  <TextField
                    className="focus"
                    variant="filled"
                    label="Name"
                    color="secondary"
                    focused
                    fullWidth
                    margin="normal"
                    {...register("title", {
                      required: true,
                      minLength: 4,
                      maxLength: 20,
                      pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                    })}
                  />
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
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  variant="filled"
                  label="Discription"
                  color="secondary"
                  focused
                  fullWidth
                  type={"text"}
                  multiline
                  margin="normal"
                  {...register("description", {
                    required: true,
                    minLength: 4,
                    maxLength: 100,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}
                />
                <span className="text-danger" color="secondary">
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
                <TextField
                  variant="filled"
                  label="Genre"
                  color="secondary"
                  focused
                  fullWidth
                  margin="normal"
                  {...register("Genre", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}
                />
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
              {/* <Grid item lg={6} xs={12}>
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.Gener}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.Gener}
                    </li>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Checkboxes"
                      placeholder="Favorites"
                    />
                  )}
                />
              </Grid> */}
              <Grid item xs={12} lg={6}>
                <TextField
                  variant="filled"
                  label="Director"
                  color="secondary"
                  focused
                  fullWidth
                  margin="normal"
                  {...register("director", {
                    required: true,
                    minLength: 4,
                    maxLength: 20,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}
                />
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
                <TextField
                  variant="filled"
                  label="Youtube Link"
                  color="secondary"
                  focused
                  fullWidth
                  margin="normal"
                  {...register("youtubeLink", {
                    required: true,
                    minLength: 4,
                    maxLength: 100,
                    pattern: /^[^\s]+(?:$|.*[^\s]+$)/,
                  })}
                />
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
              <Grid item xs={6} lg={6}>
              <div className="container">
        <h2>Unsigned with Upload Preset</h2>
        <UploadWidget onUpload={handleOnUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button onClick={handleOnClick}>
                Upload an Image
              </button>
            )
          }}
        </UploadWidget>

        {error && <p>{ error }</p>}

        {url && (
          <>
            <p><img src={ url } alt="Uploaded image" /></p>
            <p>{ url }</p>
          </>
        )}
      </div>
                <span className="text-danger"></span>
                {/* {error && <ErrorText>{error}</ErrorText>} */}
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: "red" }}
            >
              Submit
            </Button>
            <Grid container>
             
              <Grid item></Grid>
            </Grid>
          </Box>
        </form>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
}
