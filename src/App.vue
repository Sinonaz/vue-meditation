<script setup lang="ts">
import AppHeader from '@/layout/AppHeader.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isAuthView = computed(() => {})
</script>

<template>
  <div class="app">
    <AppHeader />

    <RouterView />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 65px;
}
</style>
