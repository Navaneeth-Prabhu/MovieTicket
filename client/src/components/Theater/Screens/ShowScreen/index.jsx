import * as React from 'react';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard() {
    const navigate = useNavigate()
  return (
    <>
    <Container>

          <Button
        variant="contained"
        style={{ float: "right" }}
        onClick={() => {
          navigate("/theater/addscreen");
        }}
      >Add Screen</Button>
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
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant='contained' size="small" color='secondary' onClick={()=>{
            navigate('/theater/editScreen')
        }}>Edit</Button>
        <Button variant='outlined' size="small" color='secondary' >Learn More</Button>
      </CardActions>
    </Card>
    </Container>
    </>
  );
}
