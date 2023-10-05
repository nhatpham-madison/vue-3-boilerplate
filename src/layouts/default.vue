<script setup>
import { loadLanguageAsync } from '@/plugins/i18n'

async function toggleLocales(lang) {
  await loadLanguageAsync(lang)
  locale.value = lang
}

const { t, locale } = useI18n()
</script>

<template>
  <label>{{ t('button.toggle_langs') }}</label>
  <div>
    <button @click="toggleLocales('en')">EN</button>
    <button @click="toggleLocales('vi')">VI</button>
  </div>
  <router-view />
</template>