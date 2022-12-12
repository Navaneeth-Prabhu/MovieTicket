import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// import HomePage from "./pages/Public/HomePage/HomePage";

import Dashboard from "./pages/Admin/Dashboard";
import AdminLogin from "./pages/Admin/Login"
import AddStaff from "./pages/Admin/AddStaff"
import AddMovies from './pages/Admin/AddMovies'
import Movie from "./pages/Admin/Movies";
import Theater from "./pages/Admin/Theater";



import Userhome from './pages/User/Home';
import Details from './pages/User/MovieDetials';


import Theaterhome from './pages/Theater/Home'
import TheaterLogin from './pages/Theater/Login'
import TheaterReg from './pages/Theater/Reg'


function Routess() {

  return (
    // <BrowserRouter>
      <Routes>

    
        <Route exact path ="/" element = {<Userhome/>} />
        <Route exact path ="/details" element = {<Details/>} />



    
        <Route exact path ="/theater" element = {<Theaterhome/>} />
        <Route exact path ="/theater/login" element = {<TheaterLogin/>} />
        <Route exact path ="/theater/reg" element = {<TheaterReg/>} />
        



        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />    
        <Route exact path="/admin/addstaff" element={<AddStaff />} />  
        <Route exact path="/admin/movies" element={<Movie />} />
        <Route exact path="/admin/movies/addMovies" element={<AddMovies />} />  
        <Route exact path="/admin/theater" element={<Theater />} />  
        {/* <Route exact path="/admin/staff" element={<Staff />} />     */}
        {/* <Route exact path="/admin/dashboard" element={<AdminDashboard />} />  */}
       
      </Routes>
    // </BrowserRouter> 
  );
}

export default Routess;