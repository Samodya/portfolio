import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "../Pages/Landingpage/landingpage";
import App from "../App";

export const AllRoutes = () => {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/*" element={<LandingPage/>}/>
      </Route>
    </Routes>
  </Router>
  )
};
