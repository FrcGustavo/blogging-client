import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GithubIcon from '../components/icons/GithubIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

const profileImg = ''; // 'https://res.cloudinary.com/dwapbqqbo/image/upload/v1590797814/frcgustavo_iy3mh1.jpg';

const Home = ({ mainPost }) => {
  console.log(mainPost);

  return (
    <div className="home">
      <section className="home-info container">
        <div className="home-img">
          <img src={profileImg} alt="FrcGustavo" />
        </div>
        <div className="home-info-container">
          <h1>Francisco Gustavo</h1>
          <h2>Backend Software Developer</h2>
          <p>
            Hola yo soy Gustavo y me ecataria que me acompañes en esta aventura de
            constante aprendisaje
          </p>
          <div className="icons home-icons">
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
      </section>
      <section className="home-post">
        <article className="card-main-post container">
          <img src="" alt="" />
          <div className="card-post-info">
            <h3>mkmks</h3>
            <p>koskos</p>
            <Link to="/" className="btn btn-primary">Leer más</Link>
          </div>
        </article>
      </section>
    </div>
  );
};

Home.propTypes = {
  mainPost: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({
  mainPost: state.mainPost,
});

export default connect(mapStateToProps, null)(Home);
