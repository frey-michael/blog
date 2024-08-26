import {post1} from '../lib/server/posts/post1'
import {post2} from '../lib/server/posts/post2'
import {post3} from '../lib/server/posts/post3'
import {post4} from '../lib/server/posts/post4'
import {post5} from '../lib/server/posts/post5'
import {post6} from '../lib/server/posts/post6'
import {post7} from '../lib/server/posts/post7'
import {post8} from '../lib/server/posts/post8'
import {post9} from '../lib/server/posts/post9'
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = async () => {
  return {posts: [post1, post2, post3, post4, post5, post6, post7, post8, post9]}
}

