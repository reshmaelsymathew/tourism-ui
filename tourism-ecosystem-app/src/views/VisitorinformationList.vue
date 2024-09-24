<template>
    <div class="min-h-screen bg-gray-100 p-8" style="background-image: url('/images/dashbg.jpg');">
      <!-- Header with Add Visitor Information Button -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold">Visitor Information</h2>
        <button
          @click="goToAddVisitor"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Visitor Information
        </button>
      </div>
  
      <!-- Visitor Information Table -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-left text-gray-600 font-bold uppercase text-sm">
              <th class="px-6 py-3">Visitor Name</th>
              <th class="px-6 py-3">Email</th>
              <th class="px-6 py-3">Phone Number</th>
              <th class="px-6 py-3">Nationality</th>
              <th class="px-6 py-3">Preferred Language</th>
              <th class="px-6 py-3">Visit Date</th>
              <th class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="visitor in visitors"
              :key="visitor.id"
              class="border-t border-gray-300"
            >
              <td class="px-6 py-4">{{ visitor.visitorName }}</td>
              <td class="px-6 py-4">{{ visitor.email }}</td>
              <td class="px-6 py-4">{{ visitor.phoneNumber }}</td>
              <td class="px-6 py-4">{{ visitor.nationality }}</td>
              <td class="px-6 py-4">{{ visitor.preferredLanguage }}</td>
              <td class="px-6 py-4">{{ visitor.visitDate }}</td>
              <td class="px-6 py-4">
                <button
                  @click="viewVisitor(visitor.id)"
                  class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded mr-2"
                >
                  View
                </button>
                <button
                  @click="editVisitor(visitor.id)"
                  class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  @click="deleteVisitor(visitor.id)"
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
        visitors: [], // Array to hold visitor information
      };
    },
    mounted() {
      this.fetchVisitors();
    },
    methods: {
      // Fetch all visitors from the backend
      async fetchVisitors() {
        try {
          const response = await axios.get("http://localhost:8080/api/visitorinformation");
          this.visitors = response.data;
        } catch (error) {
          console.error("Failed to fetch visitors:", error);
        }
      },
      // Navigate to add visitor form
      goToAddVisitor() {
        this.$router.push("/visitor-information");
      },
      // Navigate to view visitor details
      viewVisitor(id) {
        this.$router.push(`/visitor/${id}`);
      },
      // Navigate to edit visitor form
      editVisitor(id) {
        this.$router.push(`/edit-visitor/${id}`);
      },
      // Delete a visitor entry
      async deleteVisitor(id) {
        if (confirm("Are you sure you want to delete this visitor?")) {
          try {
            await axios.delete(`http://localhost:8080/api/visitorinformation/${id}`);
            this.fetchVisitors(); // Refresh the list after deletion
          } catch (error) {
            console.error("Failed to delete visitor:", error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>

  /* Styling the visitor information table */
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
  