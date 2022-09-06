<script>
import { store } from '../main';

export default {
  data() {
    return {
      jobs: [],
      locations: [],
      pagination: {},
    };
  },
  computed: {
    jobs() {
      return store.state.data.allJobs;
    },
    filteredJobs() {
      return store.state.data.filteredJobs;
    },
  },
};
</script>

<template>
  <div class="quick-jobs-container bg-light">
    <h3>Arama sonucunda bulunan fırsatlar...</h3>
    <hr />
    <div v-for="j in filteredJobs" :key="j.id">
      <router-link :to="'jobdetail/' + j.id">
        <div class="quick-jobs">
          <img src="https://via.placeholder.com/100" alt="" />
          <div class="quick-job-info">
            <h3>{{ j.positionName }}</h3>
            <h4>{{ j.company }}</h4>
            <h5>{{ j.date }}</h5>
          </div>
          <div class="quick-job-location">
            <span class="badge text-bg-dark">{{ j.location }}</span>
            <br />
            <span class="badge text-bg-light">{{ j.distance }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.quick-jobs-container {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 12px;
  max-height: 800px;
  overflow-y: auto;

  a {
    text-decoration: none;
    color: black;
  }

  h3 {
    font-weight: 300;
    font-size: 1.5rem;
  }

  .quick-jobs {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin-bottom: 10px;

    .quick-job-info {
      margin-left: 20px;
      min-width: 400px;

      h3 {
        font-weight: 300;
        font-size: 1.25rem;
      }

      h4 {
        font-weight: 600;
        font-size: 1.2rem;
      }

      h5 {
        font-weight: 300;
        font-size: 1rem;
        color: gray;
      }
    }

    .quick-job-location {
      margin-left: 20px;
      text-align: center;
      min-width: 120px;

      @media screen and (max-width: 680px) {
        display: none;
      }
    }
  }
}
</style>
