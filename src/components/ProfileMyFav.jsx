/* eslint-disable no-unused-vars */
import React from "react";
import "../components/ProfileMyFav.css";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function ProfileMyFav() {
  return (
    <>
      <nav className="navigation">
        <div className="nav-item">
          <i className="fas fa-book"></i>
          <Link to="/ProfileRecipes">My Recipes</Link>
        </div>
        <div className="nav-item-main-fav">
          <i className="fas fa-heart"></i>
          <Link to="/ProfileFav">Favorites</Link>
        </div>
        <div className="nav-item">
          <i className="fas fa-upload"></i>
          <Link to="/ProfileUpload">Upload a recipe</Link>
        </div>
      </nav>
      <div className="my-profile-recipes">
        <RecipeCard
          img="/src/assets/recipe1.jpg"
          title="Cheesecake"
          description="Creamy, rich cheesecake crowned with blueberry"
          rating="4.8"
        />
        <RecipeCard
          img="/src/assets/recipe2.jpg"
          title="Chocolate muffins"
          description="Loaded with chocolate chips in every single bite"
          rating="4.9"
        />
        <RecipeCard
          img="/src/assets/recipe8.jpg"
          title="Spaghetti bolognese"
          description="A true Italian classic with a rich sauce"
          rating="4.8"
        />
      </div>
    </>
  );
}

export default ProfileMyFav;
