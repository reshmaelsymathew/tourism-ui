import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import VisitorInformation from '../views/VisitorInformation.vue';
import RoomBooking from '../views/RoomBooking.vue';
import RideBooking from '../views/RideBooking.vue';
import VisitorinformationList from '../views/VisitorinformationList.vue';
import RoomBookingList from '../views/RoomBookingList.vue';
import RideBookingList from '../views/RideBookingList.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/visitor-information', name: 'VisitorInformation', component: VisitorInformation },
  { path: '/room-booking', name: 'RoomBooking', component: RoomBooking },
  { path: '/ride-booking', name: 'RideBooking', component: RideBooking },
  {path: '/visitors', name: 'VisitorinformationList', component: VisitorinformationList },
  {path: '/room-booking-list', name: 'RoomBookingList', component: RoomBookingList },
  {path: '/ride-booking-list', name: 'RideBookingList', component: RideBookingList }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
