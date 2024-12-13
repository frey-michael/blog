import posts from '$lib/server/posts';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = async () => {
  return {posts: Object.values(posts)}
}

