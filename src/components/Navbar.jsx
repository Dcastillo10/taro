import "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <div className="dropdown">
            <button className="dropbtn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#FFFFFF"
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
              {/* <img src="/src/assets/bars-solid.svg" /> */}
            </button>
            <div className="dropdown-content">
              <Link to="/LandingPage">Home</Link>

              <Link to="/Categories">Categories</Link>

              <Link to="/About">About Us</Link>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <h1>TARO´S</h1>
          <input
            className="input-search-bar"
            type="text"
            placeholder="Search for recipes"
          />
        </div>
        <div className="navbar-right">
          <Link to="/ProfileRecipes">Perfil</Link>
        </div>
      </div>
    </nav>
  );
}
