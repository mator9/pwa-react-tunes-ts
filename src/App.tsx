import React, {useEffect} from "react";
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
  useEffect(() => {
    // Requesting permission for Notifications after clicking on the button
    const button = document.getElementById("notifications") as HTMLElement;
    button.addEventListener("click", () => {
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          randomNotification();
        }
      });
    });
    // Setting up random Notification
    function randomNotification() {
      // const randomItem = Math.floor(Math.random() * games.length);
      // const notifTitle = games[randomItem].name;
      // const notifBody = `Created by ${games[randomItem].author}.`;
      // const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  
      const notifTitle = "Now my title";
  
      const notifBody = `Created by test.`;
      const options = {
        body: notifBody,
      };
      // icon: notifImg,
      new Notification(notifTitle, options);
      setTimeout(randomNotification, 30000);
    }

  }, []);


  return (
    <div className="App">
      <header>
        <TheNavigation />
      </header>
      <main className="content">
        <button id="notifications">Request dummy notifications</button>
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
