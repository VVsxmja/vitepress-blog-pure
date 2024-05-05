// modified from https://github.com/vuejs/blog/blob/main/.vitepress/theme/posts.data.ts

import { createContentLoader, ContentData } from "vitepress";
import { Post } from "./utils/posts";
import config from "../config"
import path from "path/posix"

declare const data: Post[];
export { data };

const siteBase = config.base ?? "/"

export default createContentLoader("posts/*.md", {
  excerpt: true,
  transform(raw: ContentData[]): Post[] {
    return raw
      .map((content: ContentData): Post | null => {
        const urlAsPath = path.parse(content.url)
        const finalUrl = path.format({
          ...urlAsPath,
          dir: path.join(siteBase, urlAsPath.dir),
        })
        const markdownSourcePath = path.format({
          ...urlAsPath,
          base: undefined,  // needed to make `ext` work
          ext: "md"
        })

        // default value
        const post: Post = {
          title: content.frontmatter.title ?? "Untitled",
          url: finalUrl,
          sourcePath: markdownSourcePath,
          excerpt: "",
          date: null,
          lastUpdated: null,
        };

        // process excerpt
        if (content.frontmatter?.excerpt === true) {
          // render excerpt as-is
          post.excerpt = content.excerpt ?? "";
        } else if (typeof content.frontmatter?.excerpt === "string") {
          // excerpt is in frontmatter
          post.excerpt = content.frontmatter.excerpt;
        } else {
          // set excerpt to empty
          post.excerpt = "";
        }

        // process date
        if (typeof content.frontmatter?.date === "string") {
          // frontmatter contains valid date info
          const frontDate = new Date(content.frontmatter.date);
          if (!isNaN(frontDate.getTime())) {
            post.date = frontDate;
          }
        }

        return post;
      })
      .filter((post): post is Post => post !== null);
  },
});
