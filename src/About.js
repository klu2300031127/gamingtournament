import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>About GamePortal</h1>
          <p>Your gateway to the world of competitive gaming and esports.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-section">
          <h2>⚡ Who We Are</h2>
          <p>
            GamePortal is a premier online platform dedicated to bringing gamers
            together from across the globe. We host thrilling tournaments for
            every skill level — from casual gamers to esports professionals.
          </p>
        </div>

        <div className="about-section">
          <h2>🚀 Our Vision</h2>
          <p>
            We aim to build a thriving community where passion for gaming meets
            competition, innovation, and camaraderie. Our mission is to empower
            gamers to showcase their skills and rise to greatness.
          </p>
        </div>

        <div className="about-section">
          <h2>🎮 Join the Revolution</h2>
          <p>
            Ready to level up your gaming journey? Dive into GamePortal
            tournaments, connect with like-minded players, and step into the
            spotlight. Together, we redefine competitive gaming.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
