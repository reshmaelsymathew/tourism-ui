<template>
    <div class="min-h-screen bg-gray-100 p-8" style="background-image: url('/images/dashbg.jpg');">
      <!-- Header with Add Ride Booking Button -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold">Ride Bookings</h2>
        <button
          @click="goToAddRideBooking"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Ride Booking
        </button>
      </div>
  
      <!-- Ride Booking Table -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-left text-gray-600 font-bold uppercase text-sm">
              <th class="px-6 py-3">Pickup Location</th>
              <th class="px-6 py-3">Drop Off Location</th>
              <th class="px-6 py-3">Vehicle Type</th>
              <th class="px-6 py-3">Ride Date</th>
              <th class="px-6 py-3">Passengers</th>
              <th class="px-6 py-3">Payment Method</th>
              <th class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="booking in rideBookings" :key="booking.id" class="border-t border-gray-300">
              <td class="px-6 py-4">{{ booking.pickupLocation }}</td>
              <td class="px-6 py-4">{{ booking.dropOffLocation }}</td>
              <td class="px-6 py-4">{{ booking.vehicleType }}</td>
              <td class="px-6 py-4">{{ booking.rideDate }}</td>
              <td class="px-6 py-4">{{ booking.noOfPassengers }}</td>
              <td class="px-6 py-4">{{ booking.paymentMethod }}</td>
              <td class="px-6 py-4">
                <button
                  @click="viewBooking(booking.id)"
                  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded mr-2"
                >
                  View
                </button>
                <button
                  @click="editBooking(booking.id)"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  @click="deleteBooking(booking.id)"
                  class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        rideBookings: [], // Array to hold ride bookings
      };
    },
    mounted() {
      this.fetchRideBookings();
    },
    methods: {
      // Fetch all ride bookings from the backend
      async fetchRideBookings() {
        try {
          const response = await axios.get("http://localhost:8080/api/ridebookings");
          this.rideBookings = response.data;
        } catch (error) {
          console.error("Failed to fetch ride bookings:", error);
        }
      },
      // Navigate to add ride booking form
      goToAddRideBooking() {
        this.$router.push("/ride-booking");
      },
      // Navigate to view ride booking details
      viewBooking(id) {
        this.$router.push(`/ridebooking/${id}`);
      },
      // Navigate to edit ride booking form
      editBooking(id) {
        this.$router.push(`/edit-ridebooking/${id}`);
      },
      // Delete a ride booking entry
      async deleteBooking(id) {
        if (confirm("Are you sure you want to delete this booking?")) {
          try {
            await axios.delete(`http://localhost:8080/api/ridebookings/${id}`);
            this.fetchRideBookings(); // Refresh the list after deletion
          } catch (error) {
            console.error("Failed to delete ride booking:", error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS styling for table */
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    text-align: left;
    padding: 12px;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  button:focus {
    outline: none;
  }
  </style>
  