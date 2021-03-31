import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { CSSProfile, CSSSocialMedia } from './styles';

const Profile = ({ cover, name, title, description }) => {
  return (
    <CSSProfile>
      <div>
        <img src={cover} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <CSSSocialMedia>
          <a href="https://www.linkedin.com/in/frcgustavo/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/FranciscoGustavo" target="_blank">
            <FaGithub />
          </a>
          <a href="mailto:hidalgofco520@gmail.com?subject=frcgustavo.com">
            <FaEnvelope />
          </a>
        </CSSSocialMedia>
      </div>
    </CSSProfile>
  );
};

export default Profile;
