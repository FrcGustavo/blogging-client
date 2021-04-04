import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { optimizeImage } from 'root/utils';
import { CSSProfile, CSSSocialMedia } from './styles';

const Profile = ({ cover, name, title, description }) => {
  return (
    <CSSProfile>
      <div>
        <img
          src={optimizeImage(cover, 'w_450,h_450,c_scale')}
          alt={name}
          width="150px"
          height="150px"
        />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <CSSSocialMedia>
          <a
            href="https://www.linkedin.com/in/frcgustavo/"
            rel="noopener"
            target="_blank"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/FranciscoGustavo"
            rel="noopener"
            target="_blank"
          >
            <FaGithub />
            Github
          </a>
          <a href="mailto:hidalgofco520@gmail.com?subject=frcgustavo.com">
            <FaEnvelope />
            Correo electronico
          </a>
        </CSSSocialMedia>
      </div>
    </CSSProfile>
  );
};

export default Profile;
