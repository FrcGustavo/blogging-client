import React from 'react';

import GithubIcon from '../icons/GithubIcon';
import TwitterIcon from '../icons/TwitterIcon';
import LinkedinIcon from '../icons/LinkedinIcon';

import config from '../../config';

const MyProfile = () => (
  <div className="my-profile">
    <div className="my-profile-img">
      <img src={config.profileImg} alt="FrcGustavo" />
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
          <GithubIcon />
        </a>
        <a href="https://twitter.com/frcgustavo" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/frcgustavo/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
        </a>
      </div>
    </div>
  </div>
);

export default MyProfile;