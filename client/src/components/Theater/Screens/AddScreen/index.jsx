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
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

import InputLabel from "@mui/material/InputLabel";

import { useForm } from "react-hook-form";
import axios from "../../../../axios/axios";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

// import './index.css'

const ErrorText = ({ children, ...props }) => (
  <Typography sx={{ color: "error.main" }} {...props}>
    {children}
  </Typography>
);

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
const URL = "/api/admin/movieImage/upload";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FormMovie() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setname] = React.useState("");

  const handleChange = (event) => {
    setname(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("asdfadfasdfasdf", errors);

  const onSubmit = async (data) => {
    console.log("helo", data);
    const formData = new FormData();

    formData.append("image", data.file[0]);
    await axios
      .post("http://localhost:3001/admin/movieinfo", data)
      .then(async (response) => {
        console.log(response.data._id);
        let id = response.data._id;
        axios
          .post(
            `http://localhost:3001/admin/movieImage/upload/${id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then(({ data }) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              <Grid item xs={12} lg={6}>
                <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Movie Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={name}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item lg={6} xs={12}>
                <div>
                  <TextField
                    className="focus"
                    variant="filled"
                    label="Busness Days"
                    color="secondary"
                    fullWidth
                    margin="1"
                    {...register("weekly days", {
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
              <Grid item lg={6} xs={12}>
                <div>
                  <TextField
                    className=""
                    variant="filled"
                    label="Showtime"
                    color="secondary"
                    fullWidth
                    margin="1"
                    {...register("ShowTime", {
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
                <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="Status"
                    id="demo-simple-select-filled"
                    value={name}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"pending"}>Pending</MenuItem>
                    <MenuItem value={"canclled"}>canclled</MenuItem>
                    <MenuItem value={"open"}>Open</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                   2d or 3d
                  </InputLabel>
                  <Select
                    labelId="2D or 3D"
                    id="demo-simple-select-filled"
                    value={name}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"2D"}>2d</MenuItem>
                    <MenuItem value={"3D"}>3d</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6}>
                <FormControl variant="filled" color="secondary" fullWidth>
                  <InputLabel id="demo-simple-select-filled-label">
                    Price
                  </InputLabel>
                  <Select
                    labelId="Price"
                    id="demo-simple-select-filled"
                    value={name}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"120"}>120</MenuItem>

                    <MenuItem value={"140"}>140</MenuItem>
                  </Select>
                </FormControl>
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
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </form>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
}
