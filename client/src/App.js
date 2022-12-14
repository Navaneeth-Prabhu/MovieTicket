import Routes from "./Routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
