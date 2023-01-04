import { CardPost } from '@/molecules';
import styles from './ListPosts.module.css'

const ListPosts = ({ data }) => {
  return (
      <div className='p-8'>
        <section className={styles.listPosts}>
          {data.map(({ cover, title, description, slug }) => (
            <CardPost
            key={slug}
            cover={cover}
            title={title}
            description={description}
            href={slug}
            />
            ))}
        </section>
      </div>
  );
};

export default ListPosts;
