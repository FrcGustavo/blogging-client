import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

import config from '../../../config';

import './styles.scss';

const Footer = () => {
  const [blog, setBlog] = useState(false);
  useEffect(() => {
    if (!blog) {
      fetch(`${config.api}/posts?limit=5`)
        .then((res) => res.json())
        .then((data) => setBlog(data.body.posts));
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <h4>Redes Sociales</h4>
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
        <div className="posts">
          <h4>Blog</h4>
          {
            !blog ? false : blog.map((p) => <p key={p.slug}><Link to={p.slug}>{p.title}</Link></p>)
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
