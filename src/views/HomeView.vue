<script setup>
import JobGridByType from '@/components/JobGridByType.vue';
import Search from '@/components/Search.vue';
import QuickSearchJobs from '../components/QuickSearchJobs.vue';
</script>

<script>
import http from '../service/axios';

export default {
  methods: {
    async getAllJobs() {
      const res = await http.get('job-list');
      const locations = res.data.reduce((acc, job) => {
        if (!acc.includes(job.location)) acc.push(job.location);
        return acc;
      }, []);

      this.$store.commit('setData', { key: 'allLocations', value: locations });
      this.$store.commit('setData', { key: 'allJobs', value: res.data });
    },
  },
  mounted() {
    this.getAllJobs();
  },
};
</script>

<template>
  <main>
    <Search />
    <JobGridByType />
    <QuickSearchJobs />
  </main>
</template>
