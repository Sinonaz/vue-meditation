<script setup lang="ts"></script>

<template>
  <div class="app">
    <slot />
  </div>
</template>

<style scoped>
.app {
  height: 100%;
  background: url('@/assets/bg.png') no-repeat center / cover;
}
</style>
