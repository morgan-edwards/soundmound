import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
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
      <p>Discover, stream, and share some real tight music on a super slow, ad-free, groundbreaking site</p>
      <Link to="/signup">
        <button className="orange-btn">Sign up for free</button>
      </Link>
    </div>

  </div>
);

export default Hero;
