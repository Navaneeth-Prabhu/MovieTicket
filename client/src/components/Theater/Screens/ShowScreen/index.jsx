import React ,{useState,useEffect}from 'react';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function ImgMediaCard() {

  const [Screen, setScreen] = useState([])
    const navigate = useNavigate()
    // useEffect(() => {
    //   axios.get("http://localhost:3001/theater/getScreen").then((response)=>{
    //     console.log("respo",response);
    //     setScreen(response.data)
    //   })
    // })
    
  return (
    <>
    <Container>

          {/* <Button
        variant="contained"
        style={{ float: "right" }}
        onClick={() => {
          navigate("/theater/addscreen");
        }}
      >Add Screen</Button> */}

        {Screen.map((data)=>(

    <Card sx={{ maxWidth: 190 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="14"
        width={'20px'}
        image={require("../../../../images/Everything_Everywhere_All_at_Once.jpg")}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.screenName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Row : {data.row}
          Col : {data.col}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small" color='secondary' onClick={()=>{
            navigate('/theater/addMovies')
        }}>Edit</Button>
        <Button variant='outlined' size="small" color='secondary' >Learn More</Button>
      </CardActions>
    </Card>
        ))}
    </Container>
    </>
  );
}
