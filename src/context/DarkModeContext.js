import { createContext, useState } from "react";

const darkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <darkModeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </darkModeContext.Provider>
  );
};

export { darkModeContext, DarkModeProvider };
