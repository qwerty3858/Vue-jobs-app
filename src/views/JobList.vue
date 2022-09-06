<script>
import http from '../service/axios';
import { parseLinkHeader } from '../service/parseHelper';

export default {
  data() {
    return {
      jobs: [],
      locations: [],
      pagination: {},
      limit: 4,
    };
  },
  computed: {
    allJobs() {
      return this.$store.state.data.allJobs;
    },
  },
  methods: {
    async getAllJobs(id = 1, link = null) {
      const url = link || `job-list?_limit=${this.limit}&_page=${id}`;
      const res = await http.get(url);
      const pagination = parseLinkHeader(res.headers.link);
      this.pagination = { ...pagination, pageCount: Number(pagination?.last?.split('page=')[1]) ?? 0 };
      this.jobs = res.data;
      this.locations = res.data.reduce((acc, job) => {
        if (!acc.includes(job.cityName)) acc.push(job.cityName);
        return acc;
      }, this.locations);
    },
  },
  mounted() {
    this.getAllJobs();
  },
};
</script>

<template>
  <div class="quick-jobs-container bg-light">
    <h3>Arama sonucunda bulunan fırsatlar...</h3>
    <small>{{ allJobs.length || jobs.length }} sonuç arasından {{ limit }} adet gösteriliyor.</small>
    <hr />

    <div v-for="j in jobs" :key="j.id">
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

    <nav aria-label="Page navigation" class="custom-pagination">
      <ul class="pagination">
        <li :class="pagination?.prev ? 'page-item' : 'page-item disabled'">
          <span class="page-link" @click="getAllJobs(null, pagination.prev)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        <li v-for="page in pagination.pageCount" :key="page" class="page-item">
          <span class="page-link" @click="getAllJobs(page)">{{ page }}</span>
        </li>

        <li :class="pagination?.next ? 'page-item' : 'page-item disabled'">
          <span class="page-link" @click="getAllJobs(null, pagination.next)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
        <select id="limit" class="form-select form-select-sm" aria-label=".form-select-sm limit" v-model="limit" @change="getAllJobs()">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option selected value="4">4</option>
        </select>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.custom-pagination {
  select {
    width: 100px;
  }

  .pagination {
    .page-link {
      cursor: pointer;
    }
  }
}

.quick-jobs-container {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 12px;

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
    }
  }
}
</style>
