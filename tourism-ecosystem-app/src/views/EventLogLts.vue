<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold mb-6">Event Log</h1>

    <!-- Render Action Type Count Chart when data is available -->
    <div class="chart-container mb-6" v-if="actionTypeCounts.length">
      <ActionTypeCountChartLts :actionTypeCounts="actionTypeCounts" />
    </div>

    <!-- Render Action Type Event Date Count Chart when data is available -->
    <div class="chart-container-count" v-if="actionTypeEventDateCounts.length">
      <ActionTypeEventDateChartLts :actionTypeEventDateCounts="actionTypeEventDateCounts" />
    </div>
  </div>
</template>

<script>
import ActionTypeCountChartLts from './ActionTypeCountChartLts.vue';
import ActionTypeEventDateChartLts from './ActionTypeEventDateChartLts.vue';
import axios from 'axios';

export default {
  components: {
    ActionTypeCountChartLts,
    ActionTypeEventDateChartLts,
  },
  data() {
    return {
      actionTypeCounts: [],
      actionTypeEventDateCounts: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const actionTypeCountResponse = await axios.get('http://localhost:8081/api/eventloglts/countByActionType');
        this.actionTypeCounts = actionTypeCountResponse.data;
        console.log('Action Type Counts:', this.actionTypeCounts); // Log to check the data

        const actionTypeEventDateResponse = await axios.get('http://localhost:8081/api/eventloglts/countByActionTypeAndEventDate');
        this.actionTypeEventDateCounts = actionTypeEventDateResponse.data;
        console.log('Action Type Event Date Counts:', this.actionTypeEventDateCounts); // Log to check the data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width:400px;
}
.chart-container-count{
  position: relative;
  width:900px;
}
</style>
