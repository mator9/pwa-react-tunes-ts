import React from "react";
import logo from "./assets/logo.svg";
//styles & asssets
import "./App.scss";
import { NavLink, Route, Routes, Link } from "react-router-dom";

//copmonents
import TheNavigation from "./components/TheNavigation";

//views
import Home from "./views/Home";
import Tunes from "./views/Tunes";
import About from "./views/About";

function App() {
  return (
    <div className="App">
      <header>
        <TheNavigation/>

      </header>
      <main className="content">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/tunes" Component={Tunes} />
          <Route path="/about" Component={About} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
