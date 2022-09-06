import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/main.css';

export const store = createStore({
  state() {
    return {
      data: {
        allLocations: [],
        allJobs: [],
        filteredJobs: [],
      },
      filter: {
        search: '',
        location: '',
      },
    };
  },
  getters: {
    allLocations(state) {
      return state.data.allLocations;
    },
  },
  mutations: {
    setFilter(state, payload) {
      state.filter[payload.key] = payload.value;
    },
    setData(state, payload) {
      state.data[payload.key] = payload.value;
    },
    filterJobsByVuex(state) {
      const { search, location } = state.filter;
      const jobs = state.data.allJobs;
      let filtered = [];
      if (search.length) {
        filtered = jobs.filter((job) => {
          const { distance, positionName, company, address, phone, description, niceToHave, perks } = job; // fields to search
          const stringified = JSON.stringify({ distance, positionName, company, address, phone, description, niceToHave, perks }).toLowerCase(); // stringify to search easily
          return stringified.includes(search.toLowerCase());
        });
      }
      if (location.length) {
        const _jobs = search.length ? filtered : jobs;
        filtered = _jobs.filter((j) => j.location.toLowerCase() == location.toLowerCase());
      }

      state.data.filteredJobs = !search && !location ? jobs : filtered;
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
