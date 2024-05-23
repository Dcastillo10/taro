/* eslint-disable no-unused-vars */
import React from "react";
import "../components/ProfileInfo.css";

function ProfileMyRecipes() {
  return (
    <>
      <nav className="navigation">
        <div className="nav-item">
          <i className="fas fa-book"></i>
          <span>My recipes</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-heart"></i>
          <span>Favorites</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-upload"></i>
          <span>Upload a recipe</span>
        </div>
      </nav>
    </>
  );
}

export default ProfileMyRecipes;
