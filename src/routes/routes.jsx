import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Categories from "../Pages/Categories";
/*import { Blog } from "../Pages/Blog";*/
import About from "../Pages/About";

import Navbar from "../components/Navbar";

export function MyRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Categories" element={<Categories />} />

        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}
