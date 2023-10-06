<script setup>
// import { usersResult } from '@api/user/user.query'

// const { isLoading, isError, isFetching, data, error } = usersResult();
</script>

<template>
  <main>
    <router-link to="/">Home</router-link>
    <!-- <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <div v-else>
      <span v-if="isFetching">Refreshing...</span>
      
      <div v-for="user in data">
        <img :src="user.avatar_urls?.['96']" width="50" height="50" />
        <span>{{ user.name }}</span>
      </div>
    </div> -->
  </main>
</template>

<route lang="yaml">
name: users
meta:
  layout: default
</route>
