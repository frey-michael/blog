import type {Post} from '$lib/post'
import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = async ({params, parent}) => {
  const {postNumber} = params
  const {posts} = await parent()
  return {post: posts[parseInt(postNumber)] as Post}
}

