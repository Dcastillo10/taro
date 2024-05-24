/* eslint-disable no-unused-vars */
import React from "react";
import "../components/ProfileMyRecipes.css";
import { Link } from "react-router-dom";
import SpecialRecipeCard from "../components/SpecialRecipeCard";

function ProfileMyRecipes() {
  return (
    <>
      <nav className="navigation">
        <div className="nav-item-main">
          <i className="fas fa-book"></i>
          <Link to="/ProfileRecipes">My Recipes</Link>
        </div>
        <div className="nav-item">
          <i className="fas fa-heart"></i>
          <Link to="/ProfileFav">Favorites</Link>
        </div>
        <div className="nav-item">
          <i className="fas fa-upload"></i>
          <Link to="/ProfileUpload">Upload a recipe</Link>
        </div>
      </nav>
      <div className="my-profile-recipes">
        <SpecialRecipeCard
          img="/src/assets/recipe1.jpg"
          title="Cheesecake"
          description="Creamy, rich cheesecake crowned with blueberry"
          rating="4.8"
        />
        <SpecialRecipeCard
          img="/src/assets/recipe2.jpg"
          title="Chocolate muffins"
          description="Loaded with chocolate chips in every single bite"
          rating="4.9"
        />
        <SpecialRecipeCard
          img="/src/assets/recipe6.jpg"
          title="Grilled steak"
          description="Juicy steak with a nice crust that is easy to cook"
          rating="4.7"
        />
      </div>
    </>
  );
}

export default ProfileMyRecipes;
