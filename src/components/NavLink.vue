<script setup lang="ts">
const { to } = defineProps<{ to: string | object }>()
</script>

<template>
  <RouterLink class="link" :to active-class="active">
    <slot name="icon" />
    <slot />
  </RouterLink>
</template>

<style scoped>
.link {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  font-size: 22px;
  color: #ffffff80;
  text-decoration: none;

  &.active {
    color: white;
    cursor: default;
  }
}

.link:hover,
.link:focus {
  color: white;
}
</style>
