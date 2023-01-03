// import React, { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
// import Modal from "../Register/index";
// import "./index.css";

// function Navbar({ user }) {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);
//   const [openModal, setOpenModal] = useState(false);

//   const logout = () => {
//     window.open("http://localhost:3001/auth/logout", "_self");
//   };

//   const handleNav = () => {
//     setClick(!click);
//   };

//   const closeMobileMenu = () => {
//     setClick(false);
//   };

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };
//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

//   return (
//     <>
//       <div className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo">
//             MOVIE+
//           </Link>
//           <div className="menu-icon" onClick={handleNav}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 New Releases
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 Stream
//               </Link>
//             </li>

//             {user ? (
//               <li className="nav-item">
//                 <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                   <Dropdown>
//                     <Dropdown.Toggle variant="success">
//                       {user.displayName}
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu>
//                       <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </Link>
//               </li>
//             ) : (
//               <li  className="nav-item">
//                 {button && (
//                   <li className="nav-links">
//                     <Modal
//                       open={openModal}
//                       onClose={() => setOpenModal(false)}
//                     />
//                   </li>
//                 )}
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from "@mui/system";
import Dropdown from "react-bootstrap/Dropdown";

import Modal from "../Register/index";
// import { makeStyles } from '@material-ui/styles';

import "./nav.scss";

// import logo from '../../assets/tmovie.png';


const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];
const listItems = [
  {
    // listIcon: <Home />,
    listText: "Home"
  },
  {
    // listIcon: <AssignmentInd />,
    listText: "Resume"
  },
  {
    // listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    // listIcon: <ContactMail />,
    listText: "Contacts"
    
  }
];


function Navbar({ user }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  // const classes = useStyles();

  // const useStyles = makeStyles({
  //   drawerPaper: {
  //     borderRadius: '20px 20px 0 0',
  //   },
  // });
  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(!open);
  };
  // let anchor = left
  const list = () => (

    <Box
      sx={{ width: 350 ,
        height:"100%",
      display:'flex',
      flexDirection:'column'}}
      // role="presentation"
      // onClick={toggleDrawer()}
      // onKeyDown={toggleDrawer()}
      
    >
      <List>asdfasdf</List>

      <Box
      sx={{ width: 350 ,
        height:"100%",
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'}}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}>

      

      <List>
        {listItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.listText} />
            </ListItemButton>
            
          </ListItem>
        ))}
      </List>
        <Button onClick={logout} variant="outlined" sx={{bottom:1}}>LogOut</Button>
      {/* <Divider /> */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      </Box>
    </Box>
  );



  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          {/* <img src={logo} alt="" /> */}
          <Link to="/">Movie+</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}

          {user ? (
            <li className="nav-item">
              {/* <Link to="/" className="nav-links" onClick={closeMobileMenu}> */}
              {/* <Dropdown> */}

                {/* <Dropdown.Toggle onClick={toggleSlider} variant="success"> */}
                  {/* {user.displayName} */}
                {/* </Dropdown.Toggle> */}
                
                {/* <React.Fragment key={anchor}> */}

          <div onClick={toggleDrawer()}>{user.displayName}</div>
          <SwipeableDrawer
          open={open} anchor="right" onClose={toggleDrawer()} onOpen={toggleDrawer()}
          sx={{borderRadius:'20px 20px 0 0'}}
          >
            {list()}
          </SwipeableDrawer>
        {/* </React.Fragment> */}

            {/* <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer> */}
                


                {/* <Dropdown.Menu>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu> */}
              {/* </Dropdown> */}
              {/* </Link> */}
            </li>
          ) : (
            <li className="nav-item">
              {button && (
                <li className="nav-links">
                  <Modal open={openModal} onClose={() => setOpenModal(false)} />
                </li>
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
