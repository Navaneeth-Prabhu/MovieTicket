import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { ColorModeContext, tokens } from "../../../thems";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "../../../axios/axios";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  const navigate = useNavigate();
  const[cookies,setCookies,removeCookie]=useCookies([]);
  useEffect(() => {
    const verifyUser = async() =>{
      if(!cookies.adminjwt){
          navigate("/admin/login")
      }else{
          // const { data } = await axios.post(
          //     "http://localhost:3001/admin",
          //     {},
          //     {
          //       withCredentials: true,
          //     }
          //   );
          //   if (!data.status) {
          //     removeCookie("adminjwt");
          //     navigate("/admin/login");
          //   } else {
          //     toast(`welcome.... ${data.user} `, {
          //       theme: "dark",
          //     });
          //   }
      }
    }
    verifyUser();
  }, [cookies,navigate,removeCookie])
  

  const logOut =()=>{
      removeCookie("adminjwt")
      navigate('/admin/login')
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
 

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton className="btn" onClick={logOut}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
