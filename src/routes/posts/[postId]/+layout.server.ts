import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = async ({params, parent}) => {
  const {postId} = params
  const {posts} = await parent()
  console.log(posts.filter(p => p.id === postId));
  return {post: posts.find(p => p.id === postId)}
}
