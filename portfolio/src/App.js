import { Outlet } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Pages/Landingpage/landingpage";
import ScrollableComponent from "./Components/scrollbar";

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
