<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function redirectTo(name: string) {
  router.push({ name })
}
</script>

<template>
  <div class="initial">
    <h1>Добро пожаловать!</h1>
    <p>Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>

    <div class="initial__footer">
      <AppButton @click="() => redirectTo('login')" class="initial__button">
        Войти в приложение
      </AppButton>
      <AppButton @click="() => redirectTo('register')" class="initial__button">
        Зарегистрироваться
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
.initial {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 34px;
  }

  & p {
    font-weight: 500;
    font-size: 20px;
  }
}

.initial__footer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 65px;
}
</style>
