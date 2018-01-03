import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../general/modal';

const Hero = () => {
  const modal = <Modal />;
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

      <div className="animated fadeIn hero-content">
        <h1>Connect on SoundMound</h1>
        <p>Discover, stream, and share some real tight music on a super slow, ad-free, groundbreaking site</p>
        <Link to="/signup">
          <button className="orange-btn">Sign up for free</button>
        </Link>
      </div>
      {modal}
    </div>
  );
};

export default Hero;
