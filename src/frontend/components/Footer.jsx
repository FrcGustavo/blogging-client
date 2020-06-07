import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedinIcon from './icons/LinkedinIcon';

import config from '../config';

const Footer = () => {
  const [blog, setBlog] = useState(false);
  useEffect(() => {
    if (!blog) {
      fetch(`${config.api}/posts?limit=5`)
        .then((res) => res.json())
        .then((data) => setBlog(data.body.posts));
    }
  });

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <h4>Redes Sociales</h4>
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
        <div className="posts">
          <h4>Blog</h4>
          {
            !blog ? false : blog.map((p) => <p><Link to={p.slug}>{p.title}</Link></p>)
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
