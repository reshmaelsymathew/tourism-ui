<template>
    <div class="dashboard-page">
      <div class="dashboard-box">
        <h1>Dashboard</h1>
        <ul>
          <li><router-link to="/visitor-information">Tourism Information Center (TIC)</router-link></li>
          <li><router-link to="/room-booking">Accommodation Providers (AP)</router-link></li>
          <li><router-link to="/ride-booking">Local Transportation Services (LTS)</router-link></li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .dashboard-page {
    background-image: url('/dashboard.png');
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
  }
  .dashboard-box {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  </style>
  