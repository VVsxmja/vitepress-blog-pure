<script setup lang="ts">
import { useData } from "vitepress";
import NavBarButton from "./NavBarButton.vue";
const blogTitle: string = useData().site.value.title;
</script>

<template>
  <div class="navbar">
    <div class="navbar-container responsive-padding">
      <a href="/" class="navbar-title">{{ blogTitle }}</a>
      <div class="hidden sm:block" id="NavButtons">
        <div class="flex flex-row items-center">
          <NavBarButton>按钮一号</NavBarButton>
          <NavBarButton>按钮二号</NavBarButton>
          <NavBarButton>按钮三号</NavBarButton>
        </div>
      </div>
      <NavBarButton class="sm:hidden"
        ><div class="i-material-symbols-menu-rounded text-black text-4xl"></div
      ></NavBarButton>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  @apply sticky top-0 w-full bg-white border-solid border-0 border-b border-gray-200 drop-shadow-lg z-50;
}

.navbar-container {
  @apply flex flex-row items-center flex-wrap justify-between mx-auto p-4;
  @apply max-w-3xl xl:px-[20%] mx-auto;
}

.navbar-title {
  @apply text-4xl font-serif antialiased font-black;
  @apply no-underline text-black;
}
</style>
