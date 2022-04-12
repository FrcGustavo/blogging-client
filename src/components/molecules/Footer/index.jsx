import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { githubProfile, linkedinProfile, contactEmail } from 'root/config'
import { Container } from 'root/styles';
import { CSSFooter, CSSSocialMedia } from './styles.js';

const Footer = () => {
  return (
    <CSSFooter>
      <Container>
        <CSSSocialMedia>
          <a
            href={linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <FaLinkedin className="fill-icon" />
          </a>
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="fill-icon" />
            Github
          </a>
          <a href={`mailto:${contactEmail}?subject=frcgustavo.com`}>
            <FaEnvelope />
            Correo Electronico
          </a>
        </CSSSocialMedia>
      </Container>
    </CSSFooter>
  );
};

export default Footer;
