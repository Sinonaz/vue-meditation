<script setup lang="ts">
import IconFocus from '@/components/icons/IconFocus.vue'
import IconAnxious from '@/components/icons/IconAnxious.vue'
import IconCalm from '@/components/icons/IconCalm.vue'
import IconRelax from '@/components/icons/IconRelax.vue'
import FillButton from '@/components/FillButton.vue'

const feelingsState = [
  {
    alias: 'feeling_calm',
    text: 'Спокойно',
    iconComponent: IconCalm,
  },
  {
    alias: 'feeling_relax',
    text: 'Расслабленно',
    iconComponent: IconRelax,
  },
  {
    alias: 'feeling_focus',
    text: 'Фокусировано',
    iconComponent: IconFocus,
  },
  {
    alias: 'feeling_anxiety',
    text: 'Тревожно',
    iconComponent: IconAnxious,
  },
]
</script>

<template>
  <div class="feelings">
    <FillButton v-for="{ alias, text, iconComponent } in feelingsState" :key="alias" :name="text">
      <component :is="iconComponent" />
    </FillButton>
  </div>
</template>

<style scoped>
.feelings {
  display: flex;
  gap: 22px;
}
</style>
