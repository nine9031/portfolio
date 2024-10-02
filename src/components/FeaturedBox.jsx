import React from 'react'
import avatar from "../assets/images/nine.jpg";

const FeaturedBox = () => {
  return (
    <section className="Featured-box" id="home">
      <div className="featured-text-card">
        <span>Alongkon Natphunwat</span>
      </div>
      <div featured-name>
        i'm <span className="typedText"></span>
      </div>
      <div className="featured-text-info">
        <p>
          Hi! I'm [Your Name], a passionate programmer with a love for creating
          efficient and user-friendly applications. I specialize in [specific
          languages or technologies, e.g., JavaScript, Python, React, etc.], and
          I have experience working on a variety of projects, from web
          applications to [any other relevant areas, like mobile apps or
          back-end systems]. I thrive on problem-solving and enjoy tackling
          challenges head-on. My approach to programming combines creativity and
          analytical thinking, allowing me to develop innovative solutions that
          meet user needs.
        </p>
      </div>
      <div>
        <button className="btn">
          Download CV<i className="uil uil-file-alt"></i>
        </button>
      </div>
      <div className="social_icons">
        <div className="icons">
          <a href="  "></a>
          <i className="uil uli-instagram"></i>
        </div>
        <div className="icons">
          <a href="  "></a>
          <i className="uil uli-instagram"></i>
        </div>
        <div className="icons">
          <a href="  "></a>
          <i className="uil uli-github-alt"></i>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
}

export default FeaturedBox