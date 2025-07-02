<script setup lang="ts">
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout.vue'
import AuthLayout from '@/layout/AuthLayout.vue'

const route = useRoute()
</script>

<template>
  <component :is="route.meta.layout === 'auth' ? AuthLayout : DefaultLayout">
    <RouterView />
  </component>
</template>
