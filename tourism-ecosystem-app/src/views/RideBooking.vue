<template>
  <div
    class="ride-booking-form min-h-screen bg-cover flex items-center justify-center"
    style="background-image: url('/images/dashbg.jpg');"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
      <h2 class="text-2xl font-bold mb-6">Ride Booking</h2>
      <form @submit.prevent="submitRideBooking">
        <div class="mb-4">
          <div class="mb-4">
          <label for="visitorName" class="block text-gray-700 font-bold mb-2">Visitor Name</label>
          <input
            type="text"
            id="visitorName"
            v-model="rideBooking.visitorName"
            required
            class="form-input w-full"
          />
        </div>
          <label for="pickupLocation" class="block text-gray-700 font-bold mb-2">Pickup Location</label>
          <input
            type="text"
            id="pickupLocation"
            v-model="rideBooking.pickupLocation"
            required
            class="form-input w-full"
          />
        </div>

        <div class="mb-4">
          <label for="dropOffLocation" class="block text-gray-700 font-bold mb-2">Drop Off Location</label>
          <input
            type="text"
            id="dropOffLocation"
            v-model="rideBooking.dropOffLocation"
            required
            class="form-input w-full"
          />
        </div>

        <div class="mb-4">
          <label for="vehicleType" class="block text-gray-700 font-bold mb-2">Vehicle Type</label>
          <select v-model="rideBooking.vehicleType" required class="form-select w-full">
            <option value="" disabled>Select Vehicle Type</option>
            <option value="CAR">Car</option>
            <option value="BUS">Bus</option>
            <option value="TRAIN">Train</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="rideDate" class="block text-gray-700 font-bold mb-2">Ride Date</label>
          <input
            type="date"
            id="rideDate"
            v-model="rideBooking.rideDate"
            required
            class="form-input w-full"
          />
        </div>

        <div class="mb-4">
          <label for="noOfPassengers" class="block text-gray-700 font-bold mb-2">Number of Passengers</label>
          <input
            type="number"
            id="noOfPassengers"
            v-model="rideBooking.noOfPassengers"
            required
            class="form-input w-full"
          />
        </div>

        <div class="mb-4">
          <label for="paymentMethod" class="block text-gray-700 font-bold mb-2">Payment Method</label>
          <select v-model="rideBooking.paymentMethod" required class="form-select w-full">
            <option value="" disabled>Select Payment Method</option>
            <option value="CASH">Cash</option>
            <option value="CREDIT_CARD">Credit Card</option>
            <option value="BANK_TRANSFER">Bank Transfer</option>
            <option value="APPLE_PAYMENT">Apple Payment</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="contactNumber" class="block text-gray-700 font-bold mb-2">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            v-model="rideBooking.contactNumber"
            required
            class="form-input w-full"
          />
        </div>

        <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
          Submit Booking
        </button>
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
      rideBooking: {
        pickupLocation: "",
        dropOffLocation: "",
        vehicleType: "",
        rideDate: "",
        noOfPassengers: "",
        paymentMethod: "",
        contactNumber: ""
      },
      successMessage: "",
      errorMessage: ""
    };
  },
  methods: {
    async submitRideBooking() {
      try {
        await axios.post("http://localhost:8081/api/ridebookings", this.rideBooking);
        this.successMessage = "Ride booking submitted successfully!";
        this.errorMessage = "";
        this.resetForm();
        
        // Wait for 5 seconds before navigating to dashboard
        setTimeout(() => {
          this.$router.push("/ride-booking-list");
        }, 5000); // 5 seconds
      } catch (error) {
        console.error("Error:", error.response || error.message);
        this.errorMessage = "Failed to submit ride booking.";
        this.successMessage = "";
      }
    },
    resetForm() {
      
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS Styling */
.rider-info-form {
  background-image: url('/images/dashbg.jpg');
}

.form-input,
.form-select {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #45a049;
}

p.error {
  color: red;
}
</style>
