import React from 'react'
import Navbar from '../../components/User/Navbar'
import Details from '../../components/User/Detials'
import DetailsNav from '../../components/User/Detials/DetailsNav'
import ShowCard from '../../components/User/ShowCard'




function MovieDetials() {
  return (
    <div>

      <Navbar/>
       <Details/>
      <DetailsNav/>
      <ShowCard/>
      <ShowCard/>
      <ShowCard/>
    </div>
  )
}

export default MovieDetials