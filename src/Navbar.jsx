import "react";
import "./Navbar.css"

export default function Navbar(){
    return(
    <nav className="navbar">
    <div className="navbar-content">
      <div className="navbar-left">
        <div className="dropdown">
          <button className="dropbtn">
            <img src="" alt="Menú"/>
          </button>
          <div className="dropdown-content">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Blog</a>
            <a href="#">About Us</a>
            <a href="#">Sign Off</a>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <h1>TARO´S</h1>
        <input type="text" placeholder="Search for recipes" />
      </div>
      <div className="navbar-right">
        <a href="#">Perfil</a>
      </div>
    </div>
    </nav>
    );
}