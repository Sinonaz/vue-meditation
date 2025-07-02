<script setup lang="ts">
import FillButton from '@/components/FillButton.vue'
import IconCalm from '@/components/icons/IconCalm.vue'
import IconAnxious from '@/components/icons/IconAnxious.vue'
import IconFocus from '@/components/icons/IconFocus.vue'
import IconRelax from '@/components/icons/IconRelax.vue'
import { useProfileStore } from '@/stores/profile.store.ts'
import { onMounted } from 'vue'

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

    <div class="user__fillings">
      <FillButton name="Спокойно">
        <IconCalm />
      </FillButton>
      <FillButton name="Расслабленно">
        <IconRelax />
      </FillButton>
      <FillButton name="Фокусировано">
        <IconFocus />
      </FillButton>
      <FillButton name="Тревожно">
        <IconAnxious />
      </FillButton>
    </div>
  </div>
</template>

<style scoped>
.user {
  width: 100%;
  max-width: 370px;
}

.user__fillings {
  margin-top: 35px;
  display: flex;
  gap: 22px;
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
