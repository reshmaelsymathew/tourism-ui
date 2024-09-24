<template>
  <div class="login-page h-screen flex items-center justify-center" style="background-image: url('/images/tourismau.jpg');">
    <div class="login-box bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
      <form @submit.prevent="login" class="space-y-4">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          class="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
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
  background-size: cover;
  background-position: center;
}
</style>
