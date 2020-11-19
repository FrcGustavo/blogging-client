import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container } from 'root/styles';
import { CSSFooter, CSSSocialMedia } from './styles.js';

const Footer = () => {
  return (
    <CSSFooter>
      <Container>
        <CSSSocialMedia>
          <a href="https://www.linkedin.com/in/frcgustavo/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="fill-icon" />
          </a>
          <a href="https://github.com/FranciscoGustavo" target="_blank" rel="noopener noreferrer">
            <FaGithub className="fill-icon" />
          </a>
        </CSSSocialMedia>
      </Container>
    </CSSFooter>
  );
};

export default Footer;