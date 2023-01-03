import Routes from "./Routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css"

import Movie from "./context/movieContext";

function App() {

  return (
    <Movie>

    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    </Movie>
  );
}

export default App;
