import React, { useEffect, useState, useRef } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import Topbar from "../../components/Theater/Global/Topbar";
import "./dashboard.css";
import SideBar from "../../components/Theater/Global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Contacts from "../../components/Theater/Chat/Contacts/contacts";
import Welcome from "../../components/Theater/Chat/welcome";
import ChatContainer from "../../components/Theater/Chat/Container/chatContainer";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";
import {io} from 'socket.io-client'

function Chat() {
  const host = "http://localhost:3001"
  const navigate = useNavigate();
  const [cookies] = useCookies([]);
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect( () => {
    async function setUser(){
        const token = cookies.jwt;
        const decoded = await jwt_decode(token);
        setCurrentUser(decoded.id);
       
    }
    setUser()
  }, []);
  
  
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser);
    }
  }, [currentUser]);


  useEffect(() => {
    async function fetchData(){
      const token = cookies.jwt;
      const decoded = await jwt_decode(token);
     
      const id =(decoded.id)
      
      const data = await axios.get(`http://localhost:3001/theater/allAdminStaff`);
   
      setContacts(data.data)
    }
    fetchData();
  }, [])
  


  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SideBar />
            <main className="content">
              <Topbar></Topbar>

              <Container>
                <div className="container">
                  <Contacts contacts={contacts} changeChat={handleChatChange} currentUser={currentUser} />
                  {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} currentUser = {currentUser} socket={socket} />
          )}
                </div>
              </Container>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;
