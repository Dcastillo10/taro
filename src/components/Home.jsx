import "react";
import "../components/Home.css";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div>
            <h1 className="hero-h">Explore, Share and Enjoy</h1>
            <p className="hero-p">
              Taro´s is an elegant culinary platform that combines a passion for
              food with creativity in the kitchen. Discover new delights, share
              your own recipes, and immerse yourself in the world of cooking.
            </p>
          </div>
          <div className="hero-image">
            <img src="/src/assets/home.jpg" alt="Sushi" />
          </div>
        </div>
      </section>
      <section className="top-recipes">
        <div className="title-container">
          <h2 className="hero-h">Top 10 </h2> <h2> highest-rated recipes</h2>
        </div>
      </section>
    </main>
  );
}
