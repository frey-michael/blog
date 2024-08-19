import {post3} from '$lib/server/blogs/post3';
import type { PageServerLoad } from './$types';

export const load : PageServerLoad = async () => {
  return {posts: [post3]}
}

