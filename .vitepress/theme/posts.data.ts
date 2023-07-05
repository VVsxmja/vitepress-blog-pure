// modified from https://github.com/vuejs/blog/blob/main/.vitepress/theme/posts.data.ts

import { createContentLoader, ContentData } from "vitepress";

interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  excerpt: string | undefined;
}

declare const data: Post[];
export { data };

export default createContentLoader("posts/*.md", {
  excerpt: true,
  transform(raw: ContentData[]): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        if (frontmatter.excerpt === true) {
          // render excerpt as-is
        } else if (typeof frontmatter.excerpt === "string") {
          excerpt = frontmatter.excerpt;
        } else {
          excerpt = "";
        }
        return {
          title: frontmatter.title,
          url,
          excerpt,
          date: formatDate(frontmatter.date),
        };
      })
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string): Post["date"] {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
