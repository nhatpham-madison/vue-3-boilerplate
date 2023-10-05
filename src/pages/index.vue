<script setup>
const { t } = useI18n()
</script>

<template>
  <main>
    {{ t('home.name') }}
  </main>
</template>

<route lang="yaml">
name: home
meta:
  layout: default
</route>
