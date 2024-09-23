<template>
    <div class="room-booking-form">
      <h2>Room Booking</h2>
      <form @submit.prevent="submitRoomBooking">
        <div>
          <label for="customerName">Customer Name</label>
          <input type="text" id="customerName" v-model="roomBooking.customerName" required />
        </div>
  
        <div>
          <label for="roomType">Room Type</label>
          <select v-model="roomBooking.roomType" required>
            <option value="" disabled>Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
  
        <div>
          <label for="numberOfGuests">Number of Guests</label>
          <input type="number" id="numberOfGuests" v-model="roomBooking.numberOfGuests" required />
        </div>
  
        <div>
          <label for="checkInDate">Check-In Date</label>
          <input type="date" id="checkInDate" v-model="roomBooking.checkInDate" required />
        </div>
  
        <div>
          <label for="checkOutDate">Check-Out Date</label>
          <input type="date" id="checkOutDate" v-model="roomBooking.checkOutDate" required />
        </div>
  
        <div>
          <label for="totalPrice">Total Price</label>
          <input type="number" step="0.01" id="totalPrice" v-model="roomBooking.totalPrice" required />
        </div>
  
        <div>
          <label for="bookingStatus">Booking Status</label>
          <select v-model="roomBooking.bookingStatus" required>
            <option value="" disabled>Select Booking Status</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="PENDING">Pending</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
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
  .room-booking-form {
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
  