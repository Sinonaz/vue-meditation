<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import { ref } from 'vue'

const form = ref<{ name?: string; password?: string }>({ name: '', password: '' })

function login() {
  if (!form.value.name || !form.value.password) return

  console.log(form.value)
}
</script>

<template>
  <form class="form" @submit.prevent="login">
    <AppInput v-model="form.name" placeholder="Имя пользователя" type="text" name="name" />
    <AppInput v-model="form.password" placeholder="Пароль" type="password" name="password" />
    <AppButton class="form__button"> Войти в приложение </AppButton>
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
