import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { githubProfile, linkedinProfile, contactEmail } from 'root/config';
import styles from './Profile.module.css'

const Profile = ({ cover, name, title, description }) => {
  return (
    <section className={styles.profile}>
      <div className='flex justify-center pb-7'>
        <Image src={cover} alt={name} width={150} height={150} className='w-36 h-36 rounded-full' />
      </div>
      <div>
        <h1 className='mb-3 text-3xl text-white font-bold text-center sm:text-left'>{name}</h1>
        <h2 className='mb-3 text-2xl text-white font-bold text-center sm:text-left'>{title}</h2>
        <p className='mb-3 text-white text-center sm:text-left'>{description}</p>
        <div className={styles.socialMedia}>
          <a href={linkedinProfile} rel="noopener noreferrer" target="_blank" className='text-[0px]'>
            <FaLinkedin  className='text-3xl text-primary'/>
            LinkedIn
          </a>
          <a href={githubProfile} rel="noopener noreferrer" target="_blank" className='text-[0px]'>
            <FaGithub  className='text-3xl text-primary'/>
            Github
          </a>
          <a href={`mailto:${contactEmail}?subject=frcgustavo.com`} className='text-[0px]'>
            <FaEnvelope  className='text-3xl text-primary'/>
            Correo electronico
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
