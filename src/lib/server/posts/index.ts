import {compile} from "mdsvex"

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/lib/server/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const {metadata} = await resolver();
      const postPath = path.slice(11, -3);
      const post = await resolver()
      const text = `
        # Test Markdown

        blub blyub

        asdasdjk,
        `
      const content = await compile(text)
      const content2 = post.default.render()

      console.log(post)
      console.log(metadata)

      return {
        meta: metadata,
        path: postPath,
        text: content2,
      };
    })
  );

  return allPosts;
};
