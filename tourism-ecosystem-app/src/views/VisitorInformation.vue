<template>
    <div class="visitor-info-form">
      <h2>Submit Visitor Information</h2>
      <form @submit.prevent="submitVisitorInfo">
        <div>
          <label for="visitorName">Visitor Name</label>
          <input type="text" id="visitorName" v-model="visitor.visitorName" required />
        </div>
  
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="visitor.email" required />
        </div>
  
        <div>
          <label for="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" v-model="visitor.phoneNumber" required />
        </div>
  
        <div>
          <label for="nationality">Nationality</label>
          <input type="text" id="nationality" v-model="visitor.nationality" required />
        </div>
  
        <div>
          <label for="preferredLanguage">Preferred Language</label>
          <input type="text" id="preferredLanguage" v-model="visitor.preferredLanguage" required />
        </div>
  
        <div>
          <label for="inquiry">Inquiry</label>
          <textarea id="inquiry" v-model="visitor.inquiry" required></textarea>
        </div>
  
        <div>
          <label for="visitDate">Visit Date</label>
          <input type="date" id="visitDate" v-model="visitor.visitDate" required />
        </div>
  
        <button type="submit">Submit</button>
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
        visitor: {
          visitorName: "",
          email: "",
          phoneNumber: "",
          nationality: "",
          preferredLanguage: "",
          inquiry: "",
          visitDate: ""
        },
        successMessage: "",
        errorMessage: ""
      };
    },
    methods: {
      async submitVisitorInfo() {
        try {
          const response = await axios.post("http://localhost:8080/api/visitorinformation", this.visitor);
          this.successMessage = "Visitor information submitted successfully!";
          this.errorMessage = "";
          this.resetForm();
        } catch (error) {
          this.errorMessage = "Failed to submit visitor information.";
          this.successMessage = "";
        }
      },
      resetForm() {
        this.visitor = {
          visitorName: "",
          email: "",
          phoneNumber: "",
          nationality: "",
          preferredLanguage: "",
          inquiry: "",
          visitDate: ""
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .visitor-info-form {
    max-width: 500px;
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
  
  input, textarea {
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
  