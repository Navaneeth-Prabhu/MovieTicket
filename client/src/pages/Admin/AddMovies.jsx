import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../thems";
import Topbar from "../../components/Admin/Global/Topbar";
import "./dashboard.css";
import SideBar from "../../components/Admin/Global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import AddMoviess from "../../components/Admin/Movies/AddMovies";
import AddMovie from "../../components/Admin/Movies/AddMovies/Form";


function AddMovies() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>

        <ProSidebarProvider>
          <div className="app">
            <SideBar />
            <main className="content">
              <Topbar></Topbar>
              {/* <AddMoviess/> */}
              <AddMovie/>
            </main>
          </div>
        </ProSidebarProvider>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AddMovies;