import fs from 'fs/promises';
import path from 'path';
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

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  meta_description: string;
  cover: string;
  date?: string;
};

export type PostDetail = PostSummary & {
  html: string;
};

type GetAllArgs = {
  limit?: number;
};

type GetAll = (props?: GetAllArgs) => Promise<{ posts: PostSummary[] }>;

const POSTS_DIRECTORY = path.join(process.cwd(), 'content', 'posts');
const MARKDOWN_EXTENSIONS = ['.md', '.mdx'] as const;

const isMarkdownFile = (fileName: string) =>
  MARKDOWN_EXTENSIONS.some((extension) => fileName.toLowerCase().endsWith(extension));

const toSlug = (fileName: string) => fileName.replace(/\.(mdx?|MDX?)$/, '');

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

const readMarkdownFilenames = async () => {
  const entries = await fs.readdir(POSTS_DIRECTORY, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && isMarkdownFile(entry.name))
    .map((entry) => entry.name);
};

const resolveFilenameForSlug = async (slug: string) => {
  for (const extension of MARKDOWN_EXTENSIONS) {
    const filename = `${slug}${extension}`;
    try {
      await fs.access(path.join(POSTS_DIRECTORY, filename));
      return filename;
    } catch {
      // continue searching
    }
  }
  throw new Error(`No markdown file found for slug "${slug}" in ${POSTS_DIRECTORY}`);
};

const sortByDateDesc = (a: PostSummary, b: PostSummary) => {
  const timeA = a.date ? new Date(a.date).getTime() : 0;
  const timeB = b.date ? new Date(b.date).getTime() : 0;
  return timeB - timeA;
};

const getAll: GetAll = async ({ limit } = { limit: 9 }) => {
  const filenames = await readMarkdownFilenames();
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = toSlug(filename);
      const filePath = path.join(POSTS_DIRECTORY, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);
      return normalizeMetadata(slug, data as MarkdownFrontMatter);
    }),
  );

  const sortedPosts = posts.sort(sortByDateDesc);
  const limitedPosts = typeof limit === 'number' ? sortedPosts.slice(0, limit) : sortedPosts;

  return {
    posts: limitedPosts,
  };
};

const getOne = async ({ slug }: { slug: string }): Promise<PostDetail> => {
  const filename = await resolveFilenameForSlug(slug);
  const filePath = path.join(POSTS_DIRECTORY, filename);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContents);
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

export type { GetAllArgs };
