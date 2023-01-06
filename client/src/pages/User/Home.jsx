
import Banner from '../../components/User/Banner'
import Navbar from '../../components/User/Navbar'
import MovieRow from '../../components/User/MovieRow'
import Slide from '../../components/User/Slider2'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from '../../context/movieContext'



function Home() {

  const [user,setUser ]= useState(null)
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        
         
        
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  
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