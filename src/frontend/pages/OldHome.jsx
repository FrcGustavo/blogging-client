import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GithubIcon from '../components/icons/GithubIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

import { loadHome } from '../actions';
import config from '../config';

const Home = ({ mainPost, loadPost }) => {
  const [post, setPost] = useState(mainPost);
  useEffect(() => {
    if (!post) {
      fetch(`${config.api}/posts?limit=1`)
        .then((res) => res.json())
        .then((json) => {
          setPost(json.data.posts[0]);
          loadPost(json.data.posts[0]);
        }); // .catch(() => setError(true));
    }
  });

  if (!post) {
    return <p>Cargando</p>;
  }

  return (
    <div className="home">
      <section className="home-info container">
        <div className="home-img">
          <img src={config.profileImg} alt="FrcGustavo" />
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
          <img src={post.cover} alt={post.title} />
          <div className="card-post-info">
            <h3>{ post.title }</h3>
            <p>{ post.description}</p>
            <Link to={`/${post.slug}`} className="btn btn-primary">Leer más</Link>
          </div>
        </article>
      </section>
    </div>
  );
};

Home.propTypes = {
  mainPost: PropTypes.objectOf().isRequired,
  loadPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mainPost: state.mainPost,
});

const mapDispatchToProps = {
  loadPost: loadHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
