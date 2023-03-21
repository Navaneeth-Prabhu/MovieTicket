const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const TheaterRoutes = require("./Routes/TheaterRoutes")
const cookieParser = require("cookie-parser")
const AdminRoute = require('./Routes/AdminRoutes')
const UserRoute = require('./Routes/UserRoutes')
const authRouter = require('./Routes/auth')
const MessageRouter = require('./Routes/MessageRoutes')
const app = express();
const socket = require('socket.io')

const passport = require("passport");
const passportsetup = require('./passport')
const cookieSession = require("cookie-session");

const uri ='mongodb+srv://OctA1N:Mongodb2000@cluster0.qbzz0gm.mongodb.net/TickeBooking?retryWrites=true&w=majority'

app.use(
    cookieSession({ name: "session", keys: ["navaneeth"], maxAge: 24 * 60 * 60 * 1000 })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(cookieParser())
  app.use(express.json())
  

const server = app.listen(3001, ()=>{
console.log("server started");
})

mongoose.connect(uri,{
    useNewUrlParser:true,useUnifiedTopology:true,
}).then(()=>{
    console.log("db connected successfully");
}).catch(err=>{
    console.log(err.message)
})
const io = socket(server,{
    cors:{
        origin:"https://main.d2r161lj0uo0c1.amplifyapp.com",
        methods:"*",
        credentials:true,
    }
})

app.use(cors({
    origin:["https://main.d2r161lj0uo0c1.amplifyapp.com"],
    methods:"*",
    credentials:true,
}))

global.onlineUsers= new Map();

io.on("connection",(socket)=>{
    global.chatSocket = socket;
    socket.on('add-user',(userId)=>{
        global.onlineUsers.set(userId,socket.id)
        
    })
    socket.on('send-msg',data =>{
        console.log('in send mesg',data)
        const sendUserSocket = onlineUsers.get(data.to)
        if(sendUserSocket){
            socket.to(sendUserSocket).emit('msg-recieve',data.message)
        }
    })
})
app.use("/theater",TheaterRoutes)
app.use('/admin',AdminRoute)
app.use('/',UserRoute)
app.use('/auth',authRouter)
app.use('/message',MessageRouter)
// app.use('/api/user',reservation)