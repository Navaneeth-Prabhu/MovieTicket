import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// import HomePage from "./pages/Public/HomePage/HomePage";

import Dashboard from "./pages/Admin/Dashboard";
import AdminLogin from "./pages/Admin/Login"
import AddStaff from "./pages/Admin/AddStaff"
import AddMovies from './pages/Admin/AddMovies'
import Moviee from "./pages/Admin/Movies";
import Theater from "./pages/Admin/Theater";
import AdminChat from './pages/Admin/chat'



import Userhome from './pages/User/Home';
import UserProfile from './pages/User/Profile';
import OrderHistory from './pages/User/OrderHistory';
// import Details from './pages/User/MovieDetials';
import Details from './pages/User/Detail/Detail';
import Trailler from "./pages/User/Trailler";
import ShowTime from "./pages/User/ShowTime";


import Theaterhome from './pages/Theater/Home'
import TheaterLogin from './pages/Theater/Login'
import TheaterReg from './pages/Theater/Reg'
import TheaterScreen from './pages/Theater/Screen'
// import AddTheaterscreen from './pages/Theater/addScreen'
import AddMoviesscreen from './pages/Theater/addMovies'
import Chat from './pages/Theater/chat'

// import Movie from "./context/movieContext";


function Routess() {

  return (
    // <BrowserRouter>
   

  
      <Routes>


        <Route exact path ="/" element = {<Userhome/>} />
        <Route exact path ="/moviedetails/:id" element = {<Details/>} />
        <Route exact path ="/moviedetails/:id" element = {<Details/>} />
        <Route exact path ="/movie/trailler" element = {<Trailler/>} />
        <Route exact path ="/profile" element = {<UserProfile/>} />
        <Route exact path ="/orderhistory" element = {<OrderHistory/>} />
        <Route exact path="/buytickets/:id/select_screen" element={<ShowTime />} /> 



    
        <Route exact path ="/theater" element = {<Theaterhome/>} />
        <Route exact path ="/theater/login" element = {<TheaterLogin/>} />
        <Route exact path ="/theater/reg" element = {<TheaterReg/>} />
        <Route exact path ="/theater/screen" element = {<TheaterScreen/>} />
        {/* <Route exact path ="/theater/addScreen" element = {<AddTheaterscreen/>} /> */}
        <Route exact path ="/theater/addMovies" element = {<AddMoviesscreen/>} />
        <Route exact path ="/theater/chat" element = {<Chat/>} />
        



        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />    
        <Route exact path="/admin/addstaff" element={<AddStaff />} />  
        <Route exact path="/admin/theater" element={<Theater />} />  
        <Route exact path="/admin/movies" element={<Moviee />} />
        <Route exact path="/admin/movies/addMovies" element={<AddMovies />} />  
        <Route exact path ="/admin/chat" element = {<AdminChat/>} />
      

       
      </Routes>
   
    // </BrowserRouter> 
  );
}

export default Routess;