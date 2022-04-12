import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { githubProfile, linkedinProfile, contactEmail } from 'root/config'
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
            href={linkedinProfile}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href={githubProfile}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
            Github
          </a>
          <a href={`mailto:${contactEmail}?subject=frcgustavo.com`}>
            <FaEnvelope />
            Correo electronico
          </a>
        </CSSSocialMedia>
      </div>
    </CSSProfile>
  );
};

export default Profile;
