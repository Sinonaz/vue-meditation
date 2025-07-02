<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import NavLink from '@/components/NavLink.vue'
import IconChart from '@/components/icons/IconChart.vue'
import IconExit from '@/components/icons/IconExit.vue'
import IconStart from '@/components/icons/IconStart.vue'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function exit() {
  authStore.clearToken()
  router.push({ name: 'auth' })
}
</script>

<template>
  <header>
    <IconLogo />

    <ul>
      <li>
        <NavLink to="">
          <template #icon>
            <IconStart />
          </template>
          Медитация
        </NavLink>
      </li>
      <li>
        <NavLink to="">
          <template #icon>
            <IconChart />
          </template>
          Статистика
        </NavLink>
      </li>
      <li>
        <NavLink @click.prevent="exit" :to="{ name: 'auth' }">
          <template #icon>
            <IconExit />
          </template>
          Выход
        </NavLink>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 40px 60px 0;
}

ul {
  display: flex;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  list-style: none;

  & li {
    padding: 20px 50px;

    &:nth-child(2) {
      padding: 20px 0;
    }
  }
}
</style>
