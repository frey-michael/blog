export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/lib/server/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const {metadata} = await resolver();
      const postPath = path.slice(11, -3);
      const post = await resolver()
      const content = post.default.render()

      return {
        meta: metadata,
        path: postPath,
        text: content,
      };
    })
  );

  return allPosts;
};
