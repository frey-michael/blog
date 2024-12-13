import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = async ({params, parent}) => {
  const {postId} = params
  const {posts} = await parent()
  return {post: posts.find(p => p.id === postId)}
}
