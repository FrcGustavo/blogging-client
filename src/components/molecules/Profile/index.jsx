import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { githubProfile, linkedinProfile, contactEmail } from 'root/config';
import { optimizeImage } from 'root/utils';
import { CSSProfile, CSSSocialMedia } from './styles';

const Profile = ({ cover, name, title, description }) => {
  return (
    <CSSProfile>
      <div>
        <Image src={cover} alt={name} width={150} height={150} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <CSSSocialMedia>
          <a href={linkedinProfile} rel="noopener noreferrer" target="_blank">
            <FaLinkedin />
            LinkedIn
          </a>
          <a href={githubProfile} rel="noopener noreferrer" target="_blank">
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
