<template>
    <div class="min-h-screen bg-gray-100 p-8"  style="background-image: url('/images/dashbg.jpg');">
      <!-- Header with Add Room Booking Button -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold">Room Bookings</h2>
        <button
          @click="goToAddVisitor"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Visitor Information
        </button>
        <button
          @click="goToAddRoomBooking"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
        Add Room Booking
        </button>
        <button
          @click="goToAddRideBooking"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
        Add Ride Booking
        </button>

      </div>
  
      <!-- Room Booking Table -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-left text-gray-600 font-bold uppercase text-sm">
              <th class="px-6 py-3">Customer Name</th>
              <th class="px-6 py-3">Room Type</th>
              <th class="px-6 py-3">Number of Guests</th>
              <th class="px-6 py-3">Check-In Date</th>
              <th class="px-6 py-3">Check-Out Date</th>
              <th class="px-6 py-3">Price</th>
              <th class="px-6 py-3">Booking Status</th>
              <th class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="booking in roomBookings"
              :key="booking.id"
              class="border-t border-gray-300"
            >
              <td class="px-6 py-4">{{ booking.customerName }}</td>
              <td class="px-6 py-4">{{ booking.roomType }}</td>
              <td class="px-6 py-4">{{ booking.numberOfGuests }}</td>
              <td class="px-6 py-4">{{ booking.checkInDate }}</td>
              <td class="px-6 py-4">{{ booking.checkOutDate }}</td>
              <td class="px-6 py-4">{{ booking.totalPrice }}</td>
              <td class="px-6 py-4">{{ booking.bookingStatus }}</td>
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
        roomBookings: [], // Array to hold the room bookings
      };
    },
    mounted() {
      this.fetchRoomBookings();
    },
    methods: {
      // Fetch all room bookings from the backend
      async fetchRoomBookings() {
        try {
          const response = await axios.get("http://localhost:8080/api/roombookings");
          this.roomBookings = response.data;
        } catch (error) {
          console.error("Failed to fetch room bookings:", error);
        }
      },
      // Navigate to add visitor form
      goToAddVisitor() {
        this.$router.push("/visitor-information");
      },
      goToAddRoomBooking() {
        this.$router.push("/room-booking");
      },
       // Navigate to add ride booking form
       goToAddRideBooking() {
        this.$router.push("/ride-booking");
      },
      // Navigate to view room booking details
      viewBooking(id) {
        this.$router.push(`/roombooking/${id}`);
      },
      // Navigate to edit room booking form
      editBooking(id) {
        this.$router.push(`/edit-roombooking/${id}`);
      },
      // Delete a room booking entry
      async deleteBooking(id) {
        if (confirm("Are you sure you want to delete this booking?")) {
          try {
            await axios.delete(`http://localhost:8080/api/roombookings/${id}`);
            this.fetchRoomBookings(); // Refresh the list after deletion
          } catch (error) {
            console.error("Failed to delete room booking:", error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling the room booking list table */
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
  