import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Button from '../Buttons/Button'

import './card.css'
import { fontSize, grid } from '@mui/system';

export default function ShowCard() {
  return (
    <Card sx={{background:'#121212',color:'white' , marginTop:3}}>

        {/* <Box  xs={{display:'grid',}}> */}
        <Grid md={3}>

      <CardContent sx={{padding:'0px 24px'}}>
        <Typography gutterBottom variant="h6" component="div" sx={{margin:0}}>
            
        </Typography>

      </CardContent>
        </Grid>

       
    <Grid md={9}>
      <CardActions>
      <Box sx={{  display: 'flex',
          flexWrap: 'wrap',
          p: 1,
        //   bgcolor: 'background.paper',
        //   maxWidth: 300,
          borderRadius: 1, }}>
        <Button sx={{ border: 2 , borderRadius:0 , height:5 , width :'110px'  ,padding:2, margin:1, borderColor: '#FF1203',  fontSize: '1.2rem', alignContent:'center',color:'white', fontSize:'12px', background:"#181818"}} className='btn'>10:00 pm</Button>  
        <Button sx={{ border: 2 , borderRadius:0 , height:5 , width :'110px'  ,padding:2, margin:1, borderColor: '#FF1203',  fontSize: '1.2rem', alignContent:'center',color:'white', fontSize:'12px', background:"#181818"}} className='btn'>10:00 pm</Button>  
        <Button sx={{ border: 2 , borderRadius:0 , height:5 , width :'110px'  ,padding:2, margin:1, borderColor: '#FF1203',  fontSize: '1.2rem', alignContent:'center',color:'white', fontSize:'12px', background:"#181818"}} className='btn'>10:00 pm</Button>  
        <Button sx={{ border: 2 , borderRadius:0 , height:5 , width :'110px'  ,padding:2, margin:1, borderColor: '#FF1203',  fontSize: '1.2rem', alignContent:'center',color:'white', fontSize:'12px', background:"#181818"}} className='btn'>10:00 pm</Button>  
       
        
       
       
       </Box>
      </CardActions>

    </Grid>
       


      
    </Card>
  );
}
