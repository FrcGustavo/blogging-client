import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
          <Link href="https://www.linkedin.com/in/frcgustavo/">
            <a><FaLinkedin /></a>
          </Link>
          <Link href="https://github.com/FranciscoGustavo">
            <a href=""><FaGithub /></a>
          </Link>
        </CSSSocialMedia>
      </div>
    </CSSProfile>
  );
}

export default Profile;
