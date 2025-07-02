<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
</script>

<template>
  <main>
    <IconLogo class="logo" :width="202" :height="213" />

    <RouterView />
  </main>
</template>

<style scoped>
body {
  background: url('@/assets/bg.png') no-repeat center / cover;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}

.logo {
  margin-bottom: 40px;
}
</style>
