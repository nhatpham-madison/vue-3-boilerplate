<script setup>
const { t } = useI18n()
const {count} = useCounterStore()
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
