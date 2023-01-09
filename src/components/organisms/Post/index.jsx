import Image from 'next/image';
import {
  CSSPostContainer,
  CSSPostCard,
  CSSImage,
  CSSPostContent,
  CSSTitle,
  CSSPost,
} from './styles';
import styles from './Post.module.css';

const Post = ({ cover, title, body }) => {
  return (
    <article className="lg:py-16">
      <CSSPostCard>
        <section className="relative h-52">
          <Image
            src={cover}
            alt={title}
            fill
            className="w-full h-full object-cover"
          />
        </section>
        <CSSPostContent>
          <section className="max-w-3xl mx-auto py-4">
            <h1 className="border-b-2 border-b-gray-200 pb-4 text-2xl font-bold">
              {title}
            </h1>
          </section>
          <section
            className={styles.post}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </CSSPostContent>
      </CSSPostCard>
    </article>
  );
};
export default Post;
