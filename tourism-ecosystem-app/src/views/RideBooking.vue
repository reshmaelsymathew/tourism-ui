<template>
    <div class="ride-booking-form">
      <h2>Ride Booking</h2>
      <form @submit.prevent="submitRideBooking">
        <div>
          <label for="pickupLocation">Pickup Location</label>
          <input type="text" id="pickupLocation" v-model="rideBooking.pickupLocation" required />
        </div>
  
        <div>
          <label for="dropOffLocation">Drop Off Location</label>
          <input type="text" id="dropOffLocation" v-model="rideBooking.dropOffLocation" required />
        </div>
  
        <div>
          <label for="vehicleType">Vehicle Type</label>
          <select v-model="rideBooking.vehicleType" required>
            <option value="" disabled>Select Vehicle Type</option>
            <option value="CAR">Car</option>
            <option value="BUS">Bus</option>
            <option value="TRAIN">Train</option>
          </select>
        </div>
  
        <div>
          <label for="rideDate">Ride Date</label>
          <input type="date" id="rideDate" v-model="rideBooking.rideDate" required />
        </div>
  
        <div>
          <label for="noOfPassengers">Number of Passengers</label>
          <input type="number" id="noOfPassengers" v-model="rideBooking.noOfPassengers" required />
        </div>
  
        <div>
          <label for="paymentMethod">Payment Method</label>
          <select v-model="rideBooking.paymentMethod" required>
            <option value="" disabled>Select Payment Method</option>
            <option value="CASH">Cash</option>
            <option value="CREDIT_CARD">Credit Card</option>
            <option value="BANK_TRANSFER">Bank Transfer</option>
            <option value="APPLE_PAYMENT">Apple Payment</option>
          </select>
        </div>
  
        <div>
          <label for="contactNumber">Contact Number</label>
          <input type="text" id="contactNumber" v-model="rideBooking.contactNumber" required />
        </div>
  
        <button type="submit">Submit Booking</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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
          const response = await axios.post("http://localhost:8080/api/ridebookings", this.rideBooking);
          this.successMessage = "Ride booking submitted successfully!";
          this.errorMessage = "";
          this.resetForm();
        } catch (error) {
          console.error("Error:", error.response || error.message);
          this.errorMessage = "Failed to submit ride booking.";
          this.successMessage = "";
        }
      },
      resetForm() {
        this.rideBooking = {
          pickupLocation: "",
          dropOffLocation: "",
          vehicleType: "",
          rideDate: "",
          noOfPassengers: "",
          paymentMethod: "",
          contactNumber: ""
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .ride-booking-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  p.error {
    color: red;
  }
  </style>
  