import React, { useEffect, useState, useRef } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import Topbar from "../../components/Theater/Global/Topbar";
import "./dashboard.css";
import SideBar from "../../components/Theater/Global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
// import ChatContainer from "../../components/Theater/Chat";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Contacts from "../../components/Theater/Chat/Contacts/contacts";
import Welcome from "../../components/Theater/Chat/welcome";
import ChatContainer from "../../components/Theater/Chat/Container/chatContainer";

function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(async () => {
  //   if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     navigate("/login");
  //   } else {
  //     setCurrentUser(
  //       await JSON.parse(
  //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //       )
  //     );
  //   }
  // }, []);
  // useEffect(() => {
  //   if (currentUser) {
  //     socket.current = io(host);
  //     socket.current.emit("add-user", currentUser._id);
  //   }
  // }, [currentUser]);


  useEffect(() => {
    async function fetchData(){

      const data = await axios.get("http://localhost:3001/theater/allTheater");
      console.log(data);
      setContacts(data.data)
    }
    fetchData();
  }, [])
  


  // useEffect(async () => {
  //   // if (currentUser) {
  //   // if (currentUser.isAvatarImageSet) {
  //   const data = await axios.get("http://localhost:3001/theater/allTheater");
  //   console.log("in use effect");
  //   setContacts(data.data);
  //   // } else {
  //   // navigate("/setAvatar");
  //   // }
  //   // }
  // }, [currentUser]);
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
                  <Contacts contacts={contacts} changeChat={handleChatChange} />
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
