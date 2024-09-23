import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import VisitorInformation from '../views/VisitorInformation.vue';
import RoomBooking from '../views/RoomBooking.vue';
import RideBooking from '../views/RideBooking.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/visitor-information', name: 'VisitorInformation', component: VisitorInformation },
  { path: '/room-booking', name: 'RoomBooking', component: RoomBooking },
  { path: '/ride-booking', name: 'RideBooking', component: RideBooking }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
