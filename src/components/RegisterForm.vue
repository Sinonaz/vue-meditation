<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
</script>

<template>
  <form class="form">
    <AppInput placeholder="Электронная почта" type="email" name="email" />
    <AppInput placeholder="Имя" type="text" name="name" />
    <AppInput placeholder="Пароль" type="password" name="password" />
    <AppButton class="form__button"> Создать аккаунт </AppButton>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 325px;
}

.form__button {
  margin-top: 25px;
}
</style>
