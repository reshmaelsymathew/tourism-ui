<template>
    <div class="p-4 bg-white shadow rounded-lg">
      <canvas ref="actionTypeEventDateChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  export default {
    props: {
      actionTypeEventDateCounts: {
        type: Array,
        required: true,
      },
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const ctx = this.$refs.actionTypeEventDateChart.getContext('2d');
        const labels = this.actionTypeEventDateCounts.map(item => item.eventDate);
        const data = this.actionTypeEventDateCounts.map(item => item.count);
  
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Action Counts by Event Date',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)',
                },
              },
              x: {
                type: 'category',
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)',
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: '#333',
                },
              },
            },
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
   canvas {
    display: block;
    box-sizing: border-box;
    height: 400px;
    width: 400px;
  }
  </style>
  