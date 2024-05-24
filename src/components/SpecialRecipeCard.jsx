import "react";
import "./SpecialRecipeCard.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function SpecialRecipeCard({ img, title, description, rating }) {
  return (
    <section className="recipes-section">
      <div className="recipe-card">
        <div className="recipe-image">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="recipe-rating">⭐ {rating}</div>
          <div className="special-buttons">
            <button className="start-button delete-button">Delete</button>
            <button className="start-button edit-button">Edit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

SpecialRecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};
