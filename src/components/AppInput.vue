<script setup lang="ts">
const value = defineModel<string>()
</script>

<template>
  <input v-model="value" />
</template>

<style scoped>
input {
  padding: 10px;
  background: none;
  width: 100%;
  color: white;
  font-family: inherit;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid white;
  outline: none;

  &::placeholder {
    color: #bec2c2;
  }
}
</style>
