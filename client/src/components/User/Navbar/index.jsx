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

import Dropdown from "react-bootstrap/Dropdown";
import Modal from "../Register/index";

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

function Navbar({ user }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const logout = () => {
    window.open("http://localhost:3001/auth/logout", "_self");
  };

  const { pathname } = useLocation();
  const headerRef = useRef(null);

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
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  {user.displayName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
