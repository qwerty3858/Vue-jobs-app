<script>
import { store } from '../main';

export default {
  data() {
    return {
      search: '',
      selected: '',
    };
  },
  computed: {
    locations() {
      return store.state.data.allLocations;
    },
  },
  methods: {
    handleLocation(e) {
      store.commit('setFilter', { key: 'location', value: e.target.value });
    },
    handleSearch(e) {
      store.commit('setFilter', { key: 'search', value: e.target.value });
    },
    searchClick(event) {
      event.preventDefault();
      store.commit('filterJobsByVuex');
    },
  },
};
</script>

<template>
  <div class="search-container bg-light">
    <h1>Senin için <span>245.532</span> ilan var!</h1>

    <div class="search-form-container">
      <div class="input-group mb-3">
        <select class="form-select" aria-label="Lokasyon" @change="handleLocation" v-model="selected">
          <option value="">Şehir</option>
          <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
        </select>

        <input type="text" class="form-control" aria-label="Ara" @keyup.enter="searchClick" @change="handleSearch" />
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchClick">Ara</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.search-container {
  margin-top: 1rem;
  height: 180px;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: purple;
    letter-spacing: 1.5px;

    span {
      font-weight: 700;
    }
  }

  .search-form-container {
    display: flex;
    width: 50% !important;

    select,
    input {
      height: 50px;
    }

    select {
      max-width: 200px;
    }
  }
}
</style>
