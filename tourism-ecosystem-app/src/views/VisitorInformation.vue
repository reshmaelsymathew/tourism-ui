<template>
  <div class="visitor-info-form min-h-screen bg-cover flex items-center justify-center" style="background-image: url('/images/dashbg.jpg');">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 class="text-2xl font-bold mb-6">Submit Visitor Information</h2>
      <form @submit.prevent="submitVisitorInfo">
        <div class="mb-4">
          <label for="visitorName" class="block text-gray-700 font-bold mb-2">Visitor Name</label>
          <input type="text" id="visitorName" v-model="visitor.visitorName" required class="form-input w-full" />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" v-model="visitor.email" required class="form-input w-full" />
        </div>

        <div class="mb-4">
          <label for="phoneNumber" class="block text-gray-700 font-bold mb-2">Phone Number</label>
          <input type="text" id="phoneNumber" v-model="visitor.phoneNumber" required class="form-input w-full" />
        </div>

        <div class="mb-4">
          <label for="nationality" class="block text-gray-700 font-bold mb-2">Nationality</label>
          <input type="text" id="nationality" v-model="visitor.nationality" required class="form-input w-full" />
        </div>

        <div class="mb-4">
          <label for="preferredLanguage" class="block text-gray-700 font-bold mb-2">Preferred Language</label>
          <input type="text" id="preferredLanguage" v-model="visitor.preferredLanguage" required class="form-input w-full" />
        </div>

        <div class="mb-4">
          <label for="inquiry" class="block text-gray-700 font-bold mb-2">Inquiry</label>
          <textarea id="inquiry" v-model="visitor.inquiry" required class="form-textarea w-full"></textarea>
        </div>

        <div class="mb-4">
          <label for="visitDate" class="block text-gray-700 font-bold mb-2">Visit Date</label>
          <input type="date" id="visitDate" v-model="visitor.visitDate" required class="form-input w-full" />
        </div>

        <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">Submit</button>
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
        await axios.post("http://localhost:8082/api/visitorinformation", this.visitor);
        this.successMessage = "Visitor information submitted successfully!";
        this.errorMessage = "";
        this.resetForm();
        
        // Redirect to the dashboard after successful submission
        setTimeout(() => {
          this.$router.push("/visitors");
        }, 5000); // 5 seconds
      } catch (error) {
        this.errorMessage = "Failed to submit visitor information.";
        this.successMessage = "";
      }
    },
    resetForm() {
      
    }
  }
};
</script>

<style scoped>
/* Custom Tailwind CSS Styling */
.visitor-info-form {
  background-image: url('/images/dashbg.jpg');
}

.form-input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
}

.form-textarea {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  height: 100px;
}
</style>
