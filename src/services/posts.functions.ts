import { createServerFn } from '@tanstack/react-start';
import PostsService from './posts.server';

export const listPosts = createServerFn({ method: 'GET' })
  .validator((data: { limit: number }) => {
    if (!Number.isSafeInteger(data?.limit) || data.limit < 0) {
      throw new Error('Expected a non-negative post limit');
    }
    return data;
  })
  .handler(({ data }) => PostsService.getAll(data));

export const readPost = createServerFn({ method: 'GET' })
  .validator((slug: string) => {
    if (typeof slug !== 'string') throw new Error('Expected a post slug');
    return slug;
  })
  .handler(({ data: slug }) => PostsService.getOne({ slug }));
