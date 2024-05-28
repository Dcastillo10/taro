/* eslint-disable no-unused-vars */
import React from "react";
import Home from "../components/Home";
import { Carousel } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <>
      <Home />
      <div className="recipe-cards">
        <Carousel
          controls={true}
          indicators={false}
          interval={null}
          className="custom-carousel"
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <RecipeCard
                img="/src/assets/recipe1.jpg"
                title="Cheesecake"
                description="Creamy, rich cheesecake crowned with blueberry"
              />
              <RecipeCard
                img="/src/assets/recipe2.jpg"
                title="Chocolate muffins"
                description="Loaded with chocolate chips in every single bite."
              />
              <RecipeCard
                img="/src/assets/recipe3.jpg"
                title="Spaghetti bolognese"
                description="A true Italian classic with a meaty, chilli sauce."
              />
              <RecipeCard
                img="/src/assets/recipe4.jpg"
                title="Grilled steak"
                description="Juicy steak with a nice crust and big enough to slice and serve family."
              />
              <RecipeCard
                img="/src/assets/recipe5.jpg"
                title="Chicken breast"
                description="These juicy, tender chicken breasts are delicious."
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <RecipeCard
                img="/src/assets/recipe1.jpg"
                title="Cheesecake"
                description="Creamy, rich cheesecake crowned with blueberry"
              />
              <RecipeCard
                img="/src/assets/recipe2.jpg"
                title="Chocolate muffins"
                description="Loaded with chocolate chips in every single bite."
              />
              <RecipeCard
                img="/src/assets/recipe3.jpg"
                title="Spaghetti bolognese"
                description="A true Italian classic with a meaty, chilli sauce."
              />
              <RecipeCard
                img="/src/assets/recipe4.jpg"
                title="Grilled steak"
                description="Juicy steak with a nice crust and big enough to slice and serve family."
              />
              <RecipeCard
                img="/src/assets/recipe5.jpg"
                title="Chicken breast"
                description="These juicy, tender chicken breasts are delicious."
              />
              <RecipeCard
                img="/src/assets/recipe5.jpg"
                title="Chicken breast"
                description="These juicy, tender chicken breasts are delicious."
              />
              <RecipeCard
                img="/src/assets/recipe5.jpg"
                title="Chicken breast"
                description="These juicy, tender chicken breasts are delicious."
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default LandingPage;
