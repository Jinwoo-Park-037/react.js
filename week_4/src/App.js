import dummy from "./db/menu.json";
import Header from "./components/Header.js";
import MainPage from "./components/MainPage.js";
import Menu from "./components/Menu.js";
import AboutUs from "./components/AboutUs.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Header />

        <Routes>
          <Route exact path = "/"
            element = {
              <MainPage />
            }
          />

          <Route exact path = "/menu"
            element = {
              <Menu />
            }
          />

          <Route exact path = "/about_us"
            element = {
              <AboutUs />
            }
          />

        </Routes>
      </div>


    </BrowserRouter>
  );
}

export default App;
