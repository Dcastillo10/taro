/* eslint-disable no-unused-vars */
// Carrusel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "../components/RecipeCard";

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  const recipes = [
    {
      img: "/src/assets/recipe1.jpg",
      title: "Cheesecake",
      description: "Creamy, rich cheesecake crowned with blueberry",
      rating: "4.8",
    },
    {
      img: "/src/assets/recipe2.jpg",
      title: "Chocolate Cake",
      description: "Decadent and moist chocolate cake",
      rating: "4.9",
    },
    {
      img: "/src/assets/recipe8.jpg",
      title: "Lemon Tart",
      description: "Tangy and sweet lemon tart",
      rating: "4.7",
    },
    {
      img: "/src/assets/recipe6.jpg",
      title: "Strawberry Shortcake",
      description: "Light and fluffy shortcake with fresh strawberries",
      rating: "4.8",
    },
  ];

  return (
    <div className="carrusel-container">
      <Slider {...settings}>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <RecipeCard
              img={recipe.img}
              title={recipe.title}
              description={recipe.description}
              rating={recipe.rating}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
