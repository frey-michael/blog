import { render } from 'svelte/server';

import * as post1 from './post1.md';
import * as post2 from './post2.md';
import * as post3 from './post3.md';

const allPostFiles = [post1, post2, post3]

const allPosts =
  allPostFiles.map(async post => {
    const {id, date, title, summary} = post.metadata;

    return {
      content: render(post.default).body,
      id: id,
      date: date,
      title: title,
      summary: summary
    };
  })

export default allPosts;
