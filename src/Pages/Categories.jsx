/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RecipeCard from "../components/RecipeCard";

const Categories = () => {
  return (
    <>
      <div className="div-h1-categories">
        <h1>Categories</h1>
      </div>

      <h2 className="h2-categories">Chicken and Meat</h2>
      <div className="recipe-cards">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          autoPlay={false}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={25}
        >
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
          <RecipeCard
            img="/src/assets/recipe6.jpg"
            title="Grilled steak"
            description="Juicy steak with a nice crust that is easy to cook"
            rating="4.7"
          />
          <RecipeCard
            img="/src/assets/recipe7.jpg"
            title="Chicken breast"
            description="Tender chicken breast in a delicious marinade"
            rating="4.6"
          />
        </Carousel>
      </div>
      <h2 className="h2-categories">Fish and Seafood</h2>
      <div className="recipe-cards">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          autoPlay={false}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={25}
        >
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
          <RecipeCard
            img="/src/assets/recipe6.jpg"
            title="Grilled steak"
            description="Juicy steak with a nice crust that is easy to cook"
            rating="4.7"
          />
          <RecipeCard
            img="/src/assets/recipe7.jpg"
            title="Chicken breast"
            description="Tender chicken breast in a delicious marinade"
            rating="4.6"
          />
        </Carousel>
      </div>

      <h2 className="h2-categories">Desserts</h2>
      <div className="recipe-cards">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
          autoPlay={false}
          interval={3000}
          centerMode={true}
          centerSlidePercentage={25}
        >
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
          <RecipeCard
            img="/src/assets/recipe6.jpg"
            title="Grilled steak"
            description="Juicy steak with a nice crust that is easy to cook"
            rating="4.7"
          />
          <RecipeCard
            img="/src/assets/recipe7.jpg"
            title="Chicken breast"
            description="Tender chicken breast in a delicious marinade"
            rating="4.6"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Categories;
