import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchbarContainer from '../dashboard/search/searchbar_container';

const Hero = (props) => {
  if (props.loggedIn) {
    return <Redirect to="/stream" />;
  } else {
    return (
      <div className="landing-container">
        <div className="landing-content app-content">

          <div className="front-hero">

            <div className="hero-header">
              <h1>SOUNDMOUND</h1>
              <div className="session_buttons">

                <button onClick={() => props.toggleModal('login')}>
                  Sign in</button>

                <button className="orange-btn"
                  onClick={() => props.toggleModal('signup')}>
                  Create account</button>

              </div>
            </div>

            <div className="hero-content">
              <h1>Connect on SoundMound</h1>
              <p>Discover, stream, and share some real tight music on a super
                sick, ad-free, groundbreaking mound of sound</p>
              <button className="orange-btn"
                onClick={() => props.login({username: "Guest", password: "password"})}>
                Login as Guest
              </button>
            </div>
          </div>

          <div className="landing-search">
            <h1>Search the mound to get started!</h1>
            <SearchbarContainer />
          </div>
        </div>
      </div>
    );
  }
};

export default Hero;
