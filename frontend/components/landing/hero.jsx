import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Hero = (props) => {
  if (props.loggedIn) {
    return <Redirect to="/stream" />;
  } else {
    return (
      <div className="front-hero">

        <div className="hero-header">
          <h1>SOUNDMOUND</h1>
          <div className="session_buttons">

            <button onClick={() => props.toggleSessionModal('login')}>
              Sign in</button>

            <button className="orange-btn"
              onClick={() => props.toggleSessionModal('signup')}>
              Create account</button>

          </div>
        </div>

        <div className="hero-content">
          <h1>Connect on SoundMound</h1>
          <p>Discover, stream, and share some real tight music on a super
            slow, ad-free, groundbreaking site</p>
          <button className="orange-btn"
            onClick={() => props.toggleSessionModal('signup')}>
            Sign up for free</button>
        </div>
      </div>
    );
  }
};

export default Hero;
