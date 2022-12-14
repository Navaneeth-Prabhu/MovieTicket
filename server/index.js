const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const TheaterRoutes = require("./Routes/TheaterRoutes")
const cookieParser = require("cookie-parser")
const AdminRoute = require('./Routes/AdminRoutes')
const UserRoute = require('./Routes/UserRoutes')
const app = express();

app.listen(3001, ()=>{
console.log("server started");
})

mongoose.connect("mongodb://localhost:27017/TicketBooking",{
    useNewUrlParser:true,useUnifiedTopology:true,
}).then(()=>{
    console.log("db connected successfully");
}).catch(err=>{
    console.log(err.message)
})

app.use(cors({
    origin:["http://localhost:3000"],
    method:"*",
    credentials:true,
}))
app.use(cookieParser())
app.use(express.json())
app.use("/theater",TheaterRoutes)
app.use('/admin',AdminRoute)
app.use('/',UserRoute)