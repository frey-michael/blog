import posts from '$lib/server/posts';
import type {LayoutServerLoad} from './$types';


export const load: LayoutServerLoad = async () => {
  const loadedPosts = await Promise.all(Object.values(posts));

  return {posts: loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())}
}

