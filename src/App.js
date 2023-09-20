import "./App.css";
import DarkMode from "./components/Dark Mode/DarkMode";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <header className="App-header">
          <DarkMode />
        </header>
      </DarkModeProvider>
    </div>
  );
}

export default App;
