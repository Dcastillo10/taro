/* eslint-disable react/prop-types */
import "react";
import "./RecipeCard.css"
import PropTypes from 'prop-types';

export default function RecipeCard({img,title, description, rating}) {
    return (
      <section className="recipes-section">
        <div className="recipe-card">
        <div className="recipe-image">
          <img
            src={img}
            alt={title}
          />
        </div>
        <div className="recipe-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="recipe-rating">⭐ {rating}</div>
          <button className="start-button">Start</button>
        </div>
      </div>
      </section>
      
    );
  }

  RecipeCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  };