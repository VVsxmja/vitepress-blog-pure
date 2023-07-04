<template>
  <div class="select-none cursor-pointer">
    <a class="button-text button-style">
      <slot></slot>
    </a>
  </div>
</template>

<!-- TODO: finish button template -->

<style scoped>
.button-text {
  @apply text-xl underline underline-offset-8 font-serif antialiased font-black;
}

.button-style {
  @apply block py-2 px-4 bg-inherit active:bg-gray-200 hover:bg-gray-100 rounded;
}
</style>
