import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Categories from "../Pages/Categories";
import About from "../Pages/About";
import ProfileFav from "../Pages/ProfileFav";
import ProfileRecipes from "../Pages/ProfileRecipes";
import ProfileUpload from "../Pages/ProfileUpload";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function MyRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/About" element={<About />} />
        <Route path="/ProfileFav" element={<ProfileFav />} />
        <Route path="/ProfileRecipes" element={<ProfileRecipes />} />
        <Route path="/ProfileUpload" element={<ProfileUpload />} />
      </Routes>
      <Footer />
    </Router>
  );
}
