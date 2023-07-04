<script setup lang="ts">
import { useData } from "vitepress";
import Nav from "./nav/Nav.vue";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";
const { page, frontmatter } = useData();

console.log(frontmatter.value.home);
</script>

<template>
  <Nav></Nav>
  <main class="font-serif max-w-3xl px-4 xl:px-[20%] mx-auto">
    <Home v-if="frontmatter.layout == 'home'"></Home>
    <NotFound v-else-if="page.isNotFound"></NotFound>
    <Content class="md-content" v-else />
  </main>
</template>
