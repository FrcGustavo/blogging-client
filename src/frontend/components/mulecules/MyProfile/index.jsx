import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const MyProfile = ({ profileImg }) => (
  <div className="my-profile">
    <div className="my-profile-img">
      <img src={profileImg} alt="FrcGustavo" />
    </div>
    <div className="my-profile-info">
      <h1>Francisco Gustavo</h1>
      <h2>Backend Software Developer</h2>
      <p>
        Hola yo soy Gustavo y me ecataria que me acompañes en esta aventura de
        constante aprendisaje
      </p>
      <div className="icons my-profile-icons">
        <a href="https://github.com/FranciscoGustavo" target="_blank" rel="noopener noreferrer">
          <FaGithub className="fill-icon" />
        </a>
        <a href="https://twitter.com/frcgustavo" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="fill-icon" />
        </a>
        <a href="https://www.linkedin.com/in/frcgustavo/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="fill-icon" />
        </a>
      </div>
    </div>
  </div>
);

MyProfile.propTypes = {
  profileImg: PropTypes.string.isRequired,
};

export default MyProfile;
