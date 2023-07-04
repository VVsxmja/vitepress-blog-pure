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
      <li v-for="{ title, url, date, excerpt } of posts">
        <article>
          <a class="post-title-link" :href="url">{{ title }}</a>
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
import { data as posts } from "../posts.data.js";
import { useData } from "vitepress";

const { frontmatter } = useData();
const blogTitle: string = frontmatter.value.title ?? useData().site.value.title;
const blogDescription: string = frontmatter.value.subtext;
</script>

<style scoped>
ul.post-list {
  @apply list-none p-0 border-0 divide-y-2 divide-solid divide-gray-200;
  & > li {
    @apply border-x-0 py-12 px-2;
  }
}

a.post-title-link {
  @apply text-4xl leading-8 font-bold decoration-2 transition duration-100 text-black;

  &:hover {
    @apply decoration-3 text-gray-900;
  }

  &:active {
    @apply decoration-3 text-gray-600;
  }
}
</style>
