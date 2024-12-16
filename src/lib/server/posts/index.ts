import * as post1 from './post1.md';
import * as post2 from './post2.md';

const allPostFiles = [post1, post2]

const allPosts =
  allPostFiles.map(post => {
    const {id, date, title, summary} = post.metadata;

    return {
      content: post.default.render(),
      id: id,
      date: date,
      title: title,
      summary: summary
    };
  })

export default allPosts;
