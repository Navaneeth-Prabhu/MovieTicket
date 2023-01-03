import {
  List,
  ListItemButton,
  ListItemText,
  Input,
  TextField,
  Grid,
  FormControl,
} from "@mui/material";
import { Box, Container, display, padding } from "@mui/system";
import React from "react";
import Navbar from "../Navbar";
import "./profile.scss";

function profile() {
    const styles = theme => ({
        notchedOutline: {
          borderWidth: "1px",
          borderColor: "yellow !important"
        }
      });
  return (
    <div className="profileBg">
      <h1>hellooo</h1>
      <Navbar>
        {/* <List>
                <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="profile" />
      </ListItemButton>
                </List> */}
      </Navbar>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "708px",
            height: "500px",
            margin: 12,
            backgroundColor: "#232323",
            color: "white",
            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              height: "96px",
              widht: "100%",
            //   background: "linear-gradient(to right bottom, #430089, #82ffa1)",
              background: "linear-gradient(312deg, rgba(159,0,0,1) 0%, rgba(243,34,3,1) 100%)",
              borderRadius: "5px 5px 0 0",
              display:'flex',
              alignItems:'center',
              padding:'30px'
            }}
          >
            Heading
          </Box>


          <List sx={{padding:'10px 30px 10px 30px' , display:'flex', justifyItems:'center'}}>  
            <Grid container spacing={2}>
                <Grid item xs={4} md={4} sx={{display:'flex', alignItems:"center"}}>
                    <ListItemText >Email Address</ListItemText>
                </Grid>
                <Grid item xs={4} md={8}>
                <TextField
                 InputProps={{
                    style: {
                      borderColor: 'red',
                      border:'10px',
                      color:'white'
                    },
                  }}
                // sx={{borderColor:'white'}}
            //   color="error"
            //   label="Soft"
            // color="white"
            // style={{borderColor:'white'}}
            // color='white'
              variant="outlined"
              border='5px'
              fullWidth
              ></TextField>
             
                </Grid>
            </Grid>
          </List>
          <List sx={{padding:'10px 30px 10px 30px' , display:'flex', justifyItems:'center'}}>  
            <Grid container spacing={2}>
                <Grid item xs={4} md={4} sx={{display:'flex', alignItems:"center"}}>
                    <ListItemText >Email Address</ListItemText>
                </Grid>
                <Grid item xs={4} md={8}>
                <TextField
                sx={{borderColor:'white'}}
            //   color="error"
            //   label="Soft"
            
              variant="filled"
              fullWidth
              ></TextField>
             
                </Grid>
            </Grid>
          </List>
          <List sx={{padding:'10px 30px 10px 30px' , display:'flex', justifyItems:'center'}}>  
            <Grid container spacing={2}>
                <Grid item xs={4} md={4} sx={{display:'flex', alignItems:"center"}}>
                    <ListItemText >Email Address</ListItemText>
                </Grid>
                <Grid item xs={4} md={8}>
                <TextField
                sx={{borderColor:'white'}}
            //   color="error"
            //   label="Soft"
            
              variant="filled"
              fullWidth
              ></TextField>
             
                </Grid>
            </Grid>
          </List>
          <List sx={{padding:'10px 30px 10px 30px' , display:'flex', justifyItems:'center'}}>  
            <Grid container spacing={2}>
                <Grid item xs={4} md={4} sx={{display:'flex', alignItems:"center"}}>
                    <ListItemText >Email Address</ListItemText>
                </Grid>
                <Grid item xs={4} md={8}>
                <TextField
                sx={{borderColor:'white'}}
            //   color="error"
            //   label="Soft"
            
              variant="filled"
              fullWidth
              ></TextField>
             
                </Grid>
            </Grid>
          </List>
          <List sx={{padding:'10px 30px 10px 30px' , display:'flex', justifyItems:'center'}}>  
            <Grid container spacing={2}>
                <Grid item xs={4} md={4} sx={{display:'flex', alignItems:"center"}}>
                    <ListItemText >Email Address</ListItemText>
                </Grid>
                <Grid item xs={4} md={8}>
                <TextField
                sx={{borderColor:'white'}}
            //   color="error"
            //   label="Soft"
            
              variant="filled"
              fullWidth
              ></TextField>
             
                </Grid>
            </Grid>
          </List>
            
        </Box>
      </Container>
    </div>
  );
}

export default profile;
