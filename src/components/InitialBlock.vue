<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <div class="initial">
    <h1>Добро пожаловать!</h1>
    <p>Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>

    <AppButton class="initial__button">Войти в приложение</AppButton>
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

.initial__button {
  margin-top: 65px;
}
</style>
