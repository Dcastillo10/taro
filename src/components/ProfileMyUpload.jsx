/* eslint-disable no-unused-vars */
import React from "react";
import "../components/ProfileMyUpload.css";
import { Link } from "react-router-dom";

function ProfileMyUpload() {
  return (
    <>
      <nav className="navigation">
        <div className="nav-item">
          <i className="fas fa-book"></i>
          <Link to="/ProfileRecipes">My Recipes</Link>
        </div>
        <div className="nav-item">
          <i className="fas fa-heart"></i>
          <Link to="/ProfileFav">Favorites</Link>
        </div>
        <div className="nav-item-main-upload">
          <i className="fas fa-upload"></i>
          <Link to="/ProfileUpload">Upload a recipe</Link>
        </div>
      </nav>
      <div></div>
    </>
  );
}

export default ProfileMyUpload;
