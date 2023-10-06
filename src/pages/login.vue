<script setup>
import { useForm, useField } from 'vee-validate';

const { t } = useI18n()
const { isLoginLoading, isLoginError, loginError, signIn } = useAuth();
const { errors: formError, handleSubmit } = useForm({
  initialValues: {
    username: 'kminchelle',
    password: '0lelplR',
  },
})
const { errorMessage: usernameErrorMsg, meta: usernameMeta, value:username } = useField('username');
const { errorMessage: passwordErrorMsg, meta: passwordMeta, value:password } = useField('password');

const onLogin = handleSubmit((values) => {
  signIn(values)
})
</script>

<template>
  <main>
    username: {{  username  }}
    password: {{  password  }}
    <div class="container">
      <div class="card">
        <h2>Login Form</h2>
        <form @submit.prevent="onLogin">
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" placeholder="Enter your username">
          <span v-if="usernameErrorMsg && usernameMeta.touched">
            {{ usernameErrorMsg }}
          </span>
          
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" placeholder="Enter your password">

          <button type="submit" :disabled="isLoginLoading">Login</button>
        </form>
        
        <div class="switch">Back to
          <router-link to="/">{{ t('home.name') }}</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  color: #007BFF;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  text-align: left;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.switch {
  margin-top: 15px;
  font-size: 14px;
}

.switch a {
  color: #007BFF;
  text-decoration: none;
}

</style>

<route lang="yaml">
name: login
meta:
  layout: empty
</route>
