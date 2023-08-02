<template>
  <div class="divide-y-2 divide-solid divide-gray-200">
    <div class="py-8 px-2">
      <h1 class="font-black text-6xl leading-14">
        {{ blogTitle }}
      </h1>
      <p class="text-lg leading-7 text-gray-600">
        {{ blogDescription }}
      </p>
      <Content class="md-content" />
    </div>
    <ul class="post-list">
      <li v-for="{ title, url, date, lastUpdated, excerpt } of sortedPost">
        <article>
          <a class="post-title-link" :href="url">{{ title }}</a>
          <div class="flex flex-row my-4">
            <p v-if="date" class="post-timestamp post-date">
              {{ date.string }}
            </p>
            <p v-if="lastUpdated" class="post-timestamp post-lastupdate">
              {{ lastUpdated.string }}
            </p>
          </div>
          <div
            v-if="excerpt"
            class="max-w-none text-gray-600 text-lg md-content"
            v-html="excerpt"
          ></div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import Date from './Date.vue'
import { data as posts } from "../posts.data";
import { Post, formatDate } from "../utils/posts";
import { data as timestamps } from "../timestamp.data";
import { useData } from "vitepress";

const { frontmatter, site } = useData();
const blogTitle: string = frontmatter.value.title ?? useData().site.value.title;
const blogDescription: string = frontmatter.value.subtext;
const lang = site.value.lang;

// refactor this
const sortedPost = posts
  .map((post: Post): Post => {
    // try to get date from git timestamp
    if (!timestamps[post.src]) {
      return post;
    }
    if (!post.date) {
      post.date = timestamps[post.src].created;
    }
    if (!post.lastUpdated) {
      post.lastUpdated = timestamps[post.src].updated;
    }
    return post;
  })
  .map((post: Post) => {
    return {
      ...post,
      date: formatDate(post.date, lang),
      lastUpdated: formatDate(post.lastUpdated, lang),
    };
  })
  .sort((a, b) => {
    if (!!a.date && !!b.date) {
      return b.date.time - a.date.time;
    } else {
      return 0;
    }
  });
</script>

<style scoped>
ul.post-list {
  @apply list-none p-0 border-0 divide-y-2 divide-solid divide-gray-200;

  & > li {
    @apply border-x-0 py-12 px-2;
  }
}

a.post-title-link {
  @apply text-4xl leading-8 font-bold decoration-2 transition duration-100 text-black my-4;

  &:hover {
    @apply decoration-3 text-gray-900;
  }

  &:active {
    @apply decoration-3 text-gray-600;
  }
}

p.post-timestamp {
  &.post-date::before {
    content: "[P] ";
    white-space: pre;
    @apply i-mdi-calendar-blank;
  }

  &.post-lastupdate::before {
    content: "[E] ";
    white-space: pre;
    @apply i-mdi-calendar-edit;
  }

  @apply mr-6 ml-0 my-0;
}
</style>
