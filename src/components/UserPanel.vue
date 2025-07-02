<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store.ts'
import { onMounted } from 'vue'
import FeelingBlock from '@/components/FeelingBlock.vue'

const profileStore = useProfileStore()

onMounted(() => {
  profileStore.fetchProfile()
})
</script>

<template>
  <div class="user">
    <img src="@/assets/girl.png" width="129" height="129" alt="" />

    <h3>Добро пожаловать, {{ profileStore.profile?.username }}!</h3>
    <p>Как вы сегодня себя чувствуете?</p>

    <FeelingBlock class="user__feelings" />
  </div>
</template>

<style scoped>
.user {
  width: 100%;
  max-width: 370px;
}

.user__feelings {
  margin-top: 35px;
}

img {
  display: block;
  margin-bottom: 30px;
}

h3 {
  margin: 0 0 2px;
  font-weight: 500;
  font-size: 30px;
  font-family: var(--font-secondary), serif;
  color: white;
}

p {
  color: #ffffffb2;
  font-size: 22px;
  margin: 0;
}
</style>
