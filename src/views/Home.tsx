import React, { useState } from "react";
import "./Home.scss";
import logo from "../assets/logo.svg";

type Props = {};

const Home = (props: Props) => {
  const [title] = useState("Test this !");

  // const [title, setTitle] = useState("Test this !");
//   useEffect(() => {
//     document.title = title;
//   });
  //   const [count, setCount] = useState(1);
  return (
    <div className="home">
      <img className="logo" src={logo} alt="react logo"></img>
      {/* <h1 onClick={() => setTitle("asd")}>{title}</h1> */}
      {/* <h1
        onClick={() => {
          //   setCount(count + 1);
          //   setTitle("Test" + "!".repeat(count));
          setTitle((prevTitle) => prevTitle + "!");
        }}
      >
        {title}
      </h1> */}
      <h1>{title}</h1>
      <p>home</p>
    </div>
  );
};

export default Home;
