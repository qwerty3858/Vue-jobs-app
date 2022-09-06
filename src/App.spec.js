import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import { mockGet } from 'vi-fetch';
import 'vi-fetch/setup';

import HomeView from './views/HomeView.vue';
import JobList from './views/JobList.vue';
import JobDetail from './views/JobDetail.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/joblist', name: 'joblist', component: JobList },
    { path: '/jobdetail/:id', name: 'jobdetail', component: JobDetail },
  ],
});

const store = createStore({
  state() {
    return {
      data: {
        allLocations: [],
        allJobs: [
          {
            id: '1',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '8,53 km yakınında',
            location: 'İstanbul',
            positionName: 'Jandarma Bölge Komutanı',
            company: 'F Company',
            date: '1 gün önce',
          },
          {
            id: '2',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '1,55 km yakınında',
            location: 'İstanbul',
            positionName: 'Senior Frontend Developer',
            company: 'Y Company',
            date: '5 gün önce',
          },
          {
            id: '3',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '28,24 km yakınında',
            location: 'Bursa',
            positionName: 'Senior Backend Developer',
            company: 'X Company',
            date: '3 gün önce',
          },
          {
            id: '4',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '5,1 km yakınında',
            location: 'Ankara',
            positionName: 'Senior Fullstack Developer',
            company: 'W Company',
            date: '2 gün önce',
          },
          {
            id: '5',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '24 km yakınında',
            location: 'İstanbul',
            positionName: 'Senior Android Developer',
            company: 'V Company',
            date: '1 saat önce',
          },
          {
            id: '6',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '11 km yakınında',
            location: 'Ankara',
            positionName: 'Senior IOS Developer',
            company: 'B Company',
            date: '11 gün önce',
          },
          {
            id: '7',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '8,23 km yakınında',
            location: 'Ankara',
            positionName: 'Senior Python Developer',
            company: 'M Company',
            date: '12 gün önce',
          },
          {
            id: '8',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '5,63 km yakınında',
            location: 'İstanbul',
            positionName: 'Junior Frontend Developer',
            company: 'L Company',
            date: 'bugün',
          },
          {
            id: '9',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '86,53 km yakınında',
            location: 'Bursa',
            positionName: 'Junior Backend Developer',
            company: 'K Company',
            date: '2 gün önce',
          },
          {
            id: '10',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '8,53 km yakınında',
            location: 'Ankara',
            positionName: 'Junior Fullstack Developer',
            company: 'N Company',
            date: '2 gün önce',
          },
          {
            id: '11',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '1,22 km yakınında',
            location: 'İstanbul',
            positionName: 'Junior Android Developer',
            company: 'C Company',
            date: '1 gün önce',
          },
          {
            id: '12',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '3,55 km yakınında',
            location: 'Remote',
            positionName: 'Junior IOS Developer',
            company: 'A Company',
            date: '1 gün önce',
          },
          {
            id: '13',
            imageUrl: 'http://localhost/bluecollar/Company/Job/000/000/000/avatar/13920170713010155805.jpg',
            distance: '7,77 km yakınında',
            location: 'Remote',
            positionName: 'Junior Python Developer',
            company: 'Z Company',
            date: '1 gün önce',
          },
        ],
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

// mock fetch
mockGet('http://localhost:3000/job-list', () => {
  return [
    {
      id: 1,
      positionName: 'Frontend Developer',
      company: 'X Company',
      location: 'Ankara',
      address: 'Ankara',
      phone: '123456789',
      description: 'Frontend Developer',
      niceToHave: 'Frontend Developer',
      perks: 'Frontend Developer',
      distance: 1,
    },
  ];
});

// to clear out setted filter state
const clearFilterState = () => {
  store.commit('setFilter', { key: 'location', value: '' });
  store.commit('setFilter', { key: 'search', value: '' });
};

describe('vuex', () => {
  // to run before each test so filter state will be default for all cases
  beforeEach(() => {
    clearFilterState();
  });

  it('should render the correct navlinks', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.html()).toContain('nav-link');
  });

  it('vuex base setup with mock mutation', () => {
    const store = createStore({
      state() {
        return {
          count: 0,
        };
      },
      mutations: {
        increment(state) {
          state.count += 1;
        },
      },
    });
    store.commit('increment');
    expect(store.state.count).toBe(1);
  });

  it('vuex store mutations setFilter for search input', async () => {
    store.commit('setFilter', { key: 'search', value: 'f com' });
    store.commit('filterJobsByVuex');
    expect(store.state.data.filteredJobs.length).toBe(1); // also in ui "f com" search return 1 result
  });

  it('vuex store mutations setFilter for select location', async () => {
    store.commit('setFilter', { key: 'location', value: 'Bursa' });
    store.commit('filterJobsByVuex');
    expect(store.state.data.filteredJobs.length).toBe(2); // also in ui location "Bursa" search return 2 result
    expect(store.state.data.filteredJobs.length).not.toBe(1); // also in ui location "Bursa" search return 2 result
  });

  it('vuex store mutations setFilter for both location and search', async () => {
    store.commit('setFilter', { key: 'search', value: 'f com' });
    store.commit('setFilter', { key: 'location', value: 'Bursa' });
    store.commit('filterJobsByVuex');
    expect(store.state.data.filteredJobs.length).not.toBeGreaterThan(0); // expected not bigger than 0
    expect(store.state.data.filteredJobs.length).toBe(0); // there is not match for inputted fields, also ui there is no result shown
  });

  it('vuex store filterJobsByVuex mutation without params expect all jobs (13)', async () => {
    store.commit('filterJobsByVuex');
    expect(store.state.data.filteredJobs.length).toBe(13); // expected all 13 jobs
    expect(store.state.data.filteredJobs.length).toEqual(store.state.data.allJobs.length); // expect filtered and all jobs are equel in vuex // by length
    expect(store.state.data.filteredJobs).toEqual(store.state.data.allJobs); // expect filtered and all jobs are equel in vuex // by object structure/type
  });

  it('expecting getters and data in the vuex state to be equal', async () => {
    expect(store.state.data.allLocations.length).toEqual(store.getters.allLocations.length);
  });

  it('expecting all locations count 0, since search api did not run', async () => {
    expect(store.getters.allLocations.length).not.toBe(4);
  });
});

describe('Routing', () => {
  it('expecting mainpage routing and check some if different components rendered', async () => {
    router.push('/');
    await router.isReady(); // when router is ready

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toContain('Uzman');
    expect(wrapper.html()).toContain('Senin');
    expect(wrapper.html()).toContain('sonucunda');
  });

  it('expecting joblist page to rendered without data fetching', async () => {
    router.push('/jobdetail/1');
    await router.isReady(); // when router is ready

    const wrapper = mount(JobDetail, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.html()).toContain('İlan Detayı');
    expect(wrapper.html()).toContain('Açıklama');
    expect(wrapper.html()).toContain('Opsiyonel');
    expect(wrapper.html()).not.toContain('Jandarma'); // not expecting because data is not fetched yet
  });
});
