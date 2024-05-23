/* eslint-disable no-unused-vars */
import React from "react";
//import Footer from "../components/Footer";
import "../components/AboutUs.css";

const AboutUs = () => {
  return (
    <main>
      <div className="about-tittle">
        <h1>About Us</h1>
      </div>

      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-image">
            <img src="/src/assets/logoGOD.png" alt="Logo Taro" />
          </div>
          <div>
            <h2 className="about-hero-heading">WHO WE ARE</h2>
            <p className="about-hero-paragraph">
              Taro.io is a small company created in 2022 in the state of Colima.
              <br></br>
              <br></br>
              We are a development company owners of various products as
              PisterPet, Taro Kitchen and the most recently Taro´s
            </p>
          </div>
        </div>
      </section>
      <section className="about-mision">
        <div className="about-mision-content">
          <div>
            <h2 className="about-hero-heading">OUR VISION</h2>
            <p className="about-hero-paragraph">
              We want to become the world leading brand who offer the best and
              innovative software solutions
            </p>
          </div>
          <div>
            <h2 className="about-hero-heading">OUR MISSION</h2>
            <p className="about-hero-paragraph">
              We commit ourselves to develop and produce the world´s most
              sustainable and competitive software solutions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
