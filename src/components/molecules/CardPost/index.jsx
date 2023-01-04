import Image from 'next/image';
import { Button } from '@/atoms';
import styles from './CardPost.module.css'

const CardPost = ({ cover, title, description, href }) => {
  return (
    <article className={styles.article}>
        <div className='h-36 overflow-hidden'>
          <Image src={cover} alt={title} width={290} height={150} className="w-full object-cover" />
        </div>
        <div className='p-3'>
          <h2 className='mb-3 font-bold text-xl'>{title}</h2>
          <p className='mb-3 font-light text-sm'>{description}</p>
          <Button href={`/blog/${href}`}>Leer más</Button>
        </div>
    </article>
  );
};

export default CardPost;
