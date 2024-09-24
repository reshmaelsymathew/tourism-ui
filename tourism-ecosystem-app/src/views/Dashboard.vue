<template>
  <div class="h-screen flex flex-col" >
    <!-- Top Navigation -->
    <nav class="bg-white shadow-lg px-6 py-4 flex justify-between items-center">
      <!-- Logo and Links -->
      <div class="flex items-center space-x-6">
        <img src="/images/logo.jpg" alt="Logo" class="h-8 w-8" />
        <router-link to="/dashboard" class="text-lg text-blue-600 hover:underline">Dashboard</router-link>
        <router-link to="/visitors" class="text-lg text-blue-600 hover:underline">Tourism Information Center (TIC)</router-link>
        <router-link to="/room-booking-list" class="text-lg text-blue-600 hover:underline">Accommodation Providers (AP)</router-link>
        <router-link to="/ride-booking-list" class="text-lg text-blue-600 hover:underline">Local Transportation Services (LTS)</router-link>
      </div>

      <!-- Profile Image -->
      <div class="flex items-center space-x-4">
        <img src="/images/profile.jpeg" alt="Profile" class="h-10 w-10 rounded-full border border-gray-300" />
      </div>
    </nav>

    <!-- Dashboard Content -->
    <div class="flex-1 p-8 bg-gray-100" style="background-image: url('/images/dashbg.jpg');">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Tourism Ecosystem Australia</h1>

      <!-- Scenic Spot Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(spot, index) in scenicSpots" :key="index" class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-xl font-bold text-gray-800">{{ spot.name }}</h2>
          <p class="text-gray-600">{{ spot.description }}</p>
          <img :src="spot.image" alt="Scenic Spot" class="w-full h-40 object-cover mt-4 rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scenicSpots: [
        {
          name: 'Great Barrier Reef',
          description: 'A stunning coral reef system in Australia.',
          image: '/images/Horizontalfalls.jpg',
        },
        {
          name: 'Sydney Opera House',
          description: 'An iconic architectural masterpiece in Sydney.',
          image: '/images/operahouse.jpg',
        },
        {
          name: 'Jasper Budapes',
          description: 'A large sandstone rock formation in the Northern Territory.',
          image: '/images/JasperBudapes.jpg',
        },
        {
          name: 'Horn mt',
          description: 'A large sandstone rock formation in the Northern Territory.',
          image: '/images/hornmt.jpg',
        },
        {
          name: 'Uluru',
          description: 'A large sandstone rock formation in the Northern Territory.',
          image: '/images/dashboard.png',
        },
        {
          name: 'Wollongong Beach',
          description: 'A large sandstone rock formation in the Northern Territory.',
          image: '/images/Wollongong.jpg',
        }
      ],
    };
  },
};
</script>

<style scoped>
/* Adjust height and layout */
body {
  font-family: 'Inter', sans-serif;
}

nav {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dashboard-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dashboard-box {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
