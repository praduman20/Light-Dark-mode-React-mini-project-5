import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { darkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
import "./DarkMode.css";
import logo from "./logo.svg";

const DarkMode = () => {
  const { darkMode, toggleMode } = useContext(darkModeContext);
  return (
    <div
      className={
        darkMode ? "container container-dark" : "container container-light"
      }
    >
      <button
        onClick={() => toggleMode()}
        className={darkMode ? "dark" : "light"}
      >
        <label className={darkMode ? "dark" : "light"}></label>
        <BsFillSunFill />
        <BsFillMoonFill />
      </button>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default DarkMode;
