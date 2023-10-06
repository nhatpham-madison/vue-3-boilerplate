<script setup>
// import { usersResult } from '@api/user/user.query'

// const { isLoading, isError, isFetching, data, error } = usersResult();
const { signOut } = useAuth();
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

    <button @click="signOut">Logout</button>
  </main>
</template>

<route lang="yaml">
name: users
meta:
  layout: default
  requiresAuth: true
</route>
