/* eslint-disable no-unused-vars */
import React from "react";
import { MyRoutes } from "./routes/routes";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <div>
      <MyRoutes />
    </div>
  );
}

export default App;
