<script setup>
const { t } = useI18n()
</script>

<template>
  <main>
    <router-link to="/login">Login</router-link>
    <router-link to="/users">Users</router-link>
    {{ t('home.name') }}
  </main>
</template>

<route lang="yaml">
name: home
meta:
  layout: default
</route>
