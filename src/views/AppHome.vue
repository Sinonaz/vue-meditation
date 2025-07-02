<script setup lang="ts">
import UserPanel from '@/components/UserPanel.vue'
import MeditationList from '@/components/MeditationList.vue'
</script>

<template>
  <main>
    <UserPanel />
    <MeditationList />
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  padding: 50px 60px;
}
</style>
