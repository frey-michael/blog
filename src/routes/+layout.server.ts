import {fetchMarkdownPosts} from '$lib/server/posts';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = async () => {
  const allPosts = await fetchMarkdownPosts();
  return {posts: Object.values(allPosts)}
}

