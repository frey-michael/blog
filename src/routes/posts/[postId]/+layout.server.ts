import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = async ({params, parent}) => {
  const {postId} = params
  const {posts} = await parent()
  const loadedPosts = await Promise.all(posts);

  return {post: loadedPosts.find(p => p.id === postId)}
}
