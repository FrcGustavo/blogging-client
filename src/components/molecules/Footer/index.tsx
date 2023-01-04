import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { githubProfile, linkedinProfile, contactEmail } from 'root/config';

const Footer = () => {
  return (
    <footer className='p-7 bg-gradient-to-r from-primary-dark to-primary-light '>
      <section className='container mx-auto'>
        <div className='w-32 grid grid-cols-3 gap-x-3'>
          <a href={linkedinProfile} target="_blank" rel="noopener noreferrer"  className="text-[0px]">
            <FaLinkedin className="fill-icon text-2xl text-primary" />
            LinkedIn
          </a>
          <a href={githubProfile} target="_blank" rel="noopener noreferrer"  className="text-[0px]">
            <FaGithub className="fill-icon text-2xl text-primary" />
            Github
          </a>
          <a href={`mailto:${contactEmail}?subject=frcgustavo.com`} className="text-[0px]">
            <FaEnvelope className="text-2xl text-primary" />
            Correo Electronico
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
