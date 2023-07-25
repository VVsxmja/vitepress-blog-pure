import { defineLoader } from "vitepress";

import * as git from "isomorphic-git";
import fs from "fs";

import { TimestampInfo } from "./utils/posts";

declare const data: TimestampInfo;
export { data };

export default defineLoader({
  watch: ["**.md"], // only watch Markdown files
  async load(pages: string[]): Promise<TimestampInfo> {
    const info: TimestampInfo = {};
    await Promise.all(
      pages.map(async (pagePath) => {
        try {
          const commits: git.CommitObject[] = (
            await git.log({
              fs,
              dir: ".",
              filepath: pagePath,
              follow: true,
            })
          ).map((result) => result.commit);
          // docs at: https://isomorphic-git.org/docs/en/log
          const created: number = commits[commits.length - 1].author.timestamp;
          const updated: number = commits[0].author.timestamp;
          // git timestamp is in SECONDs, multiply it by 1000
          // because Javascript's Date() accepts MILLISECONDs
          info[pagePath] = {
            created: new Date(created * 1000),
            updated: new Date(updated * 1000),
          };
        } catch (e) {
          console.error(`Failed to get timestamp for ${pagePath}. Error: `, e);
        }
      })
    );
    return info;
  },
});
