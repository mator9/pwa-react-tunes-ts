import React from "react";
import { NavLink } from "react-router-dom";
// styles
import styles from "./TheNavigation.module.scss";

interface Props {
};

//toto mi dal react by default!
// type Props = {
//   brand: string;
// };

const TheNavigation = (props: Props) => {
  return (
    <nav className={styles.navigation}>

      {/* <NavLink to="/" activeClassName={styles.active}>Home</NavLink> */}
      {/* <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink> */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/tunes"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Tunes
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        About
      </NavLink>
    </nav>
  );
};

export default TheNavigation;
