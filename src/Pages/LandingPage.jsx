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
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center text-white">
              <RecipeCard
                img="/src/assets/recipe1.jpg"
                title="Cheesecake"
                description="Creamy, rich cheesecake crowned with blueberry"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center text-white">
              <RecipeCard
                img="/src/assets/recipe1.jpg"
                title="Cheesecake"
                description="Creamy, rich cheesecake crowned with blueberry"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center text-white">
              <RecipeCard
                img="/src/assets/recipe1.jpg"
                title="Cheesecake"
                description="Creamy, rich cheesecake crowned with blueberry"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default LandingPage;
