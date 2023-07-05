<script setup lang="ts">
import { useData } from "vitepress";
import Nav from "./nav/Nav.vue";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";
import Article from "./Article.vue";
const { page, frontmatter } = useData();
</script>

<template>
  <Nav></Nav>
  <main class="main-style responsive-width">
    <Home v-if="frontmatter.layout == 'home'"></Home>
    <NotFound v-else-if="page.isNotFound"></NotFound>
    <Article v-else></Article>
  </main>
</template>

<style scoped>

main.main-style {
  /* all use serif font */
  @apply font-serif;
}

</style>