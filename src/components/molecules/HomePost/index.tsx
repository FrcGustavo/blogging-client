import Image from 'next/image';
import { Button } from '@/atoms';
import styles from './HomePost.module.css'

const HomePost = ({ cover, title, description, href }) => {
  return (
    <section className={styles.cardContainer}>
      <article className={styles.card}>
        <div className='sm:h-full sm:p-3 sm:overflow-hidden'>
          <Image
            src={cover}
            alt={title}
            width={290}
            height={190}
            className='w-full object-cover sm:w-72 rounded-md'
          />
        </div>
        <div className='p-3'>
          <h3 className='mb-3 text-xl font-bold'>{title}</h3>
          <p className='mb-3'>{description}</p>
          <Button href={href}>LEER MÁS</Button>
        </div>
      </article>
    </section>
  );
};

export default HomePost;
