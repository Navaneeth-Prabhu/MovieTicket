
import Banner from '../../components/User/Banner'
import Navbar from '../../components/User/Navbar'
import MovieRow from '../../components/User/MovieRow'
import Slide from '../../components/User/Slider2'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from '../../context/movieContext'



function Home() {

  const [user,setUser ]= useState(null)

  
  return (
   <>
{/* <Movie> */}

   <Navbar user={user}/>

   <Banner/>

  
   <Slide/>
   <Slide/>
   <Slide/>

{/* </Movie> */}

   </>
  )
}

export default Home