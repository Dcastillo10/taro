import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Categories from "../Pages/Categories";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function MyRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
