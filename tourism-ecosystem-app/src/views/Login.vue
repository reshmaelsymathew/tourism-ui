<template>
    <div class="login-page">
      <div class="login-box">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <input v-model="username" type="text" placeholder="Username" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        if (this.username === 'admin' && this.password === 'password') {
          this.$router.push('/dashboard');
        } else {
          alert('Invalid Credentials');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    background-image: url('/tourismau.jpg');
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }
  .login-box {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  input {
    display: block;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
  }
  button {
    padding: 10px;
    width: 100%;
  }
  </style>
  