import 'react'
import './App.css'
import Navbar from './Navbar'
import RecipeCard from './RecipeCard'
import PropTypes from 'prop-types';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <><Navbar /><div>
      <main>
      <section className="hero">
          <div className="hero-content">
            <div>
              <h1 className='hero-h1'>Explore, Share and Enjoy</h1>
              <p className="hero-p">
                Taro´s is an elegant culinary platform that combines a passion for
                food with creativity in the kitchen. Discover new delights, share
                your own recipes, and immerse yourself in the world of cooking.
              </p>
            </div>
            <div className="hero-image">
              <img
                src="/src/assets/home.jpg"
                alt="Sushi"
              />
            </div>
          </div>
        </section>
        <section className="top-recipes">
          <h2>Top 10 highest-rated recipes</h2>
          <div className="recipe-cards">
          <Carousel 
            showThumbs={false} 
            infiniteLoop={true} 
            showStatus={false}
            showArrows={true}
            autoPlay={true}
            interval={3000}
            centerMode={true}
            centerSlidePercentage={25}
          >
            <RecipeCard
              img="/src/assets/recipe1.jpg"
              title="Cheesecake"
              description="Creamy, rich cheesecake crowned with blueberry"
              rating="4.8" />
            <RecipeCard
              title="Chocolate muffins"
              description="Loaded with chocolate chips in every single bite"
              rating="4.9" />
            <RecipeCard
              title="Spaghetti bolognese"
              description="A true Italian classic with a meaty, rich sauce"
              rating="4.8" />
            <RecipeCard
              title="Grilled steak"
              description="Juicy steak with a nice crust that is easy to cook"
              rating="4.7" />
            <RecipeCard
              title="Chicken breast"
              description="Juicy, tender chicken breast in a delicious marinade"
              rating="4.6" />
              </Carousel>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
    </>
  );
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default App
