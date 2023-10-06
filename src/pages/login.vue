<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from "yup";

const { t } = useI18n()
const { isLoginLoading, isLoginError, loginError, signIn } = useAuth();

const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    username: '',
    password: '',
  },
})

const { errorMessage: usernameErrorMsg, meta: usernameMeta, value:username, handleBlur:usHandleBlur } = useField('username');
const { errorMessage: passwordErrorMsg, meta: passwordMeta, value:password, handleBlur:pwHandleBlur } = useField('password');

const onLogin = handleSubmit(async (values) => {
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
          <input type="text" @blur="usHandleBlur" v-model="username" id="username" placeholder="Enter your username">
          <p v-if="usernameErrorMsg && usernameMeta.touched">
            {{ usernameErrorMsg }}
          </p>

          <label for="password">Password</label>
          <input type="password" @blur="pwHandleBlur" v-model="password" id="password" placeholder="Enter your password">

          <p v-if="passwordErrorMsg && passwordMeta.touched">
            {{ passwordErrorMsg }}
          </p>

          <button type="submit" :disabled="isLoginLoading">Login</button>

          {{ loginError }}
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
