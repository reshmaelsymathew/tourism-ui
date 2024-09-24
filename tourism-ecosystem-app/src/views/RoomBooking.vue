<template>
  <div class="min-h-screen bg-cover flex items-center justify-center" style="background-image: url('/images/dashbg.jpg');">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
      <h2 class="text-2xl font-bold mb-6">Room Booking</h2>
      <form @submit.prevent="submitRoomBooking" class="space-y-4">
        <div>
          <label for="customerName" class="block text-gray-700 font-bold mb-2">Customer Name</label>
          <input type="text" id="customerName" v-model="roomBooking.customerName" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>

        <div>
          <label for="roomType" class="block text-gray-700 font-bold mb-2">Room Type</label>
          <select v-model="roomBooking.roomType" required class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option value="" disabled>Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <div>
          <label for="numberOfGuests" class="block text-gray-700 font-bold mb-2">Number of Guests</label>
          <input type="number" id="numberOfGuests" v-model="roomBooking.numberOfGuests" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>

        <div>
          <label for="checkInDate" class="block text-gray-700 font-bold mb-2">Check-In Date</label>
          <input type="date" id="checkInDate" v-model="roomBooking.checkInDate" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>

        <div>
          <label for="checkOutDate" class="block text-gray-700 font-bold mb-2">Check-Out Date</label>
          <input type="date" id="checkOutDate" v-model="roomBooking.checkOutDate" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>

        <div>
          <label for="totalPrice" class="block text-gray-700 font-bold mb-2">Expected Price</label>
          <input type="number" step="0.01" id="totalPrice" v-model="roomBooking.totalPrice" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>

        <div>
          <label for="bookingStatus" class="block text-gray-700 font-bold mb-2">Booking Status</label>
          <select v-model="roomBooking.bookingStatus" required class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option value="" disabled>Select Booking Status</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="PENDING">Pending</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full">Submit Booking</button>
      </form>
      <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      roomBooking: {
        customerName: "",
        roomType: "",
        numberOfGuests: "",
        checkInDate: "",
        checkOutDate: "",
        totalPrice: "",
        bookingStatus: ""
      },
      successMessage: "",
      errorMessage: ""
    };
  },
  methods: {
    async submitRoomBooking() {
      try {
        const response = await axios.post("http://localhost:8080/api/roombookings", this.roomBooking);
        this.successMessage = "Room booking submitted successfully!";
        this.errorMessage = "";
        this.resetForm();
        // Wait for 5 seconds before navigating to dashboard
        setTimeout(() => {
          this.$router.push("/room-booking-list");
        }, 5000); // 5 seconds
      } catch (error) {
        console.error("Error:", error.response || error.message);
        this.errorMessage = "Failed to submit room booking.";
        this.successMessage = "";
      }
    },
    resetForm() {
      this.roomBooking = {
        customerName: "",
        roomType: "",
        numberOfGuests: "",
        checkInDate: "",
        checkOutDate: "",
        totalPrice: "",
        bookingStatus: ""
      };
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS styling applied to form elements */
</style>
