// import { useState } from "react";
// import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { tokens } from "../../../thems";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
// import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";


// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Link to={to}>
//         <Typography>{title}</Typography>
//       </Link>
//     </MenuItem>
//   );
// };

// function SideBar() {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           background: `${colors.primary[400]} !important`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <Menu iconShape="square">
//         {/* LOGO AND MENU ICON */}
//         <MenuItem
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//           style={{
//             margin: "10px 0 20px 0",
//             color: colors.grey[100],
//           }}
//         >
//           {!isCollapsed && (
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               alignItems="center"
//               ml="15px"
//             >
//               <Typography variant="h3" color={colors.grey[100]}>
//                 Theater
//               </Typography>
//               <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                 <MenuOutlinedIcon />
//               </IconButton>
//             </Box>
//           )}
//         </MenuItem>

//         <Box paddingRight={isCollapsed ? undefined : "0%"}>
//           <Item
//             title="Dashboard"
//             to="/theater"
//             icon={<HomeOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />

//           <Typography
//             variant="h6"
//             color={colors.grey[300]}
//             sx={{ m: "15px 0 5px 20px" }}
//           >
//             Pages
//           </Typography>
//           <Item
//             title="Movies"
//             to="/theater/addMovies"
//             icon={<TheaterComedyIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Screen"
//             to="/theater/screen"
//             icon={<LocalMoviesIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Reservation"
//             to="/reservation"
//             icon={<ReceiptOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />

//           <Typography
//             variant="h6"
//             color={colors.grey[300]}
//             sx={{ m: "15px 0 5px 20px" }}
//           >
//             Data
//           </Typography>
//           <Item
//             title="Users"
//             to="/theater/chat"
//             icon={<PersonOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Calendar"
//             to="/calendar"
//             icon={<CalendarTodayOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Show timming"
//             to="/shows"
//             icon={<AccessTimeIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />

//           <Typography
//             variant="h6"
//             color={colors.grey[300]}
//             sx={{ m: "15px 0 5px 20px" }}
//           >
//             Charts
//           </Typography>
//           <Item
//             title="Bar Chart"
//             to="/bar"
//             icon={<BarChartOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Pie Chart"
//             to="/pie"
//             icon={<PieChartOutlineOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Line Chart"
//             to="/line"
//             icon={<TimelineOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//           <Item
//             title="Geography Chart"
//             to="/geography"
//             icon={<MapOutlinedIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//         </Box>
//       </Menu>
//     </Box>
//   );
// }

// export default SideBar;

import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import AirplayIcon from '@mui/icons-material/Airplay';
import ChatIcon from '@mui/icons-material/Chat';


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" ,path:"/theater" ,icon:<DashboardIcon/>},
    { title: "AddMovies", src: "AddMovie", gap: true ,path:"/theater/addMovies" ,icon:<MovieRoundedIcon/>},
    { title: "Screen ", src: "Screen", path:"/theater/screen", icon:<AirplayIcon/>},
    { title: "Inbox", src: "Chat" ,    path: "/theater/chat", icon:<ChatIcon/>},
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  h-screen p-5  bg--dark-purple dark:bg-gray-purple  pt-8 relative duration-300`}
      >
        {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <ArrowBackIosIcon  onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             ${!open && "rotate-180"}`}/>
        <div className="flex gap-x-4 items-center">
          {/* <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Theater
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer dark:text-gray-400 hover:bg-gray-700 dark:hover:bg-gray-700 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Link to={Menu.path} className='flex gap-1'>
             {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};
export default Sidebar;