<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store.ts'

const router = useRouter()
const authStore = useAuthStore()

const form = ref<{ email?: string; password?: string; username?: string }>({
  email: '',
  password: '',
  username: '',
})

function login() {
  if (!form.value.username || !form.value.email || !form.value.password) return

  authStore.register(form.value.username, form.value.email, form.value.password)

  form.value = {}
}

watch(
  () => authStore.getToken,
  (token) => {
    if (token) router.push({ name: 'home' })
  },
)
</script>

<template>
  <form class="form" @submit.prevent="login">
    <AppInput v-model="form.email" placeholder="Электронная почта" type="email" name="email" required />
    <AppInput v-model="form.username" placeholder="Имя" type="text" name="name" required />
    <AppInput v-model="form.password" placeholder="Пароль" type="password" name="password" required />
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
