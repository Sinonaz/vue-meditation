<script setup lang="ts">
const { name = '' } = defineProps<{ name: string }>()
</script>

<template>
  <button type="button" class="fill-btn">
    <span class="fill-btn__icon">
      <slot />
    </span>
    {{ name }}
  </button>
</template>

<style scoped>
.fill-btn {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  font-size: 12px;
  font-family: var(--font-primary), serif;
  color: white;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  &:hover,
  &:focus {
    & .fill-btn__icon {
      background: #69b09c;
    }
  }
}

.fill-btn__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 20px;
  background: var(--c-light-gray);
}
</style>
