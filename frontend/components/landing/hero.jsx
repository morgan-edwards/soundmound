import React from 'react';
import { Link } from 'react-router-dom';

const Hero = (props) => {
  return (
    <div className="front-hero">

      <div className="hero-header">
        <h1>SOUNDMOUND</h1>
        <div className="session_buttons">
          <Link to="/login">
            <button>Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="orange-btn">Create account</button>
          </Link>
        </div>
      </div>

      <div className="hero-content">
        <h1>Connect on SoundMound</h1>
        <p>Discover, stream, and share some real tight music on a super
          slow, ad-free, groundbreaking site</p>
        <button className="orange-btn"
                onClick={props.toggleSessionModal}>Sign up for free</button>
      </div>
    </div>
  );
};

export default Hero;
