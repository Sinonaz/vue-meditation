<script setup lang="ts"></script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  background: #7c9a92;
  color: white;
  font-weight: 500;
  font-family: var(--font-primary), serif;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  padding: 16px 55px;
  cursor: pointer;
}
</style>
