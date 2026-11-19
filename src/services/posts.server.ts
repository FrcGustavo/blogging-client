import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

type MarkdownFrontMatter = {
  title?: string;
  description?: string;
  meta_description?: string;
  cover?: string;
  date?: string | Date;
};

type PostSummary = {
  slug: string;
  title: string;
  description: string;
  meta_description: string;
  cover: string;
  date?: string;
};

type PostDetail = PostSummary & {
  html: string;
};

type GetAllArgs = {
  limit?: number;
};

type GetAll = (props?: GetAllArgs) => Promise<{ posts: PostSummary[] }>;

const markdownFiles = import.meta.glob<string>('../../content/posts/*', {
  eager: true,
  import: 'default',
  query: '?raw',
});

const postsBySlug = new Map(
  Object.entries(markdownFiles)
    .filter(([filename]) => /\.mdx?$/i.test(filename))
    .map(([filename, markdown]) => [
      filename.slice(filename.lastIndexOf('/') + 1).replace(/\.mdx?$/i, ''),
      markdown,
    ] as const),
);

const parseDate = (value?: string | Date): string | undefined => {
  if (!value) return undefined;
  const parsed = typeof value === 'string' ? new Date(value) : new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
};

const normalizeMetadata = (
  slug: string,
  data: MarkdownFrontMatter,
): PostSummary => {
  const title = data.title ?? slug;
  const metaDescription = data.meta_description ?? data.description ?? '';
  return {
    slug,
    title,
    description: data.description ?? metaDescription,
    meta_description: metaDescription,
    cover:
      data.cover ??
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    date: parseDate(data.date),
  };
};

const sortByDateDesc = (a: PostSummary, b: PostSummary) => {
  const timeA = a.date ? new Date(a.date).getTime() : 0;
  const timeB = b.date ? new Date(b.date).getTime() : 0;
  return timeB - timeA;
};

const getAll: GetAll = async ({ limit } = { limit: 9 }) => {
  const posts = Array.from(postsBySlug, ([slug, markdown]) => {
    const { data } = matter(markdown);
    return normalizeMetadata(slug, data as MarkdownFrontMatter);
  });

  const sortedPosts = posts.sort(sortByDateDesc);
  const limitedPosts = typeof limit === 'number' ? sortedPosts.slice(0, limit) : sortedPosts;

  return {
    posts: limitedPosts,
  };
};

const getOne = async ({ slug }: { slug: string }): Promise<PostDetail | undefined> => {
  const markdown = postsBySlug.get(slug);
  if (markdown === undefined) return undefined;

  const { data, content } = matter(markdown);
  const metadata = normalizeMetadata(slug, data as MarkdownFrontMatter);

  const processedContent = await remark().use(html).process(content);

  return {
    ...metadata,
    html: processedContent.toString(),
  };
};

const PostsService = {
  getAll,
  getOne,
};

export default PostsService;
