// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import ThemeContext from "./context/Theme";
function App() {
  return (
    <ThemeContext>
      <div className="App">
        <Home />
      </div>
    </ThemeContext>
  );
}

export default App;
