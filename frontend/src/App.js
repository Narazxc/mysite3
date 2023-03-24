import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page components
import Home from "./components/pages/Home";
import AnimeSites from "./components/pages/AnimeSites";
import Error404 from "./components/pages/Error404";
import FavoriteCharacters from "./components/pages/FavoriteCharacters";
import CharacterDetail from "./components/pages/CharacterDetail";
import Create from "./components/pages/temp/Create";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";

// components
import SideNavigation from "./components/SideNavigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link to="/">Home</Link>
        <Link to="/animesites">Anime Sites</Link> */}
        <SideNavigation />
        <div className="wrapper">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/animesites" element={<AnimeSites />} />
              <Route
                path="/favoritecharacters"
                element={<FavoriteCharacters />}
              />
              <Route
                path="/favoritecharacters/character/:id"
                element={<CharacterDetail />}
              />
              <Route path="/addsite" element={<Create />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
