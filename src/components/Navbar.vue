<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    searchJob(event) {
      event.preventDefault();
      this.$store.commit('setFilter', { key: 'search', value: this.search });
      this.$router.push('/joblist');
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Jobs App</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link" exact-active-class="active">Ana Sayfa</router-link>
          <router-link to="/joblist" class="nav-link" exact-active-class="active">Tüm İlanlar</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  border-radius: 12px;
}
.nav-link {
  border-radius: 12px;
  padding: 0.5rem 1.5rem !important;
  font-size: 0.9rem;
}
.navbar-brand {
  font-weight: 600;
  color: rgb(29, 102, 29);
  text-transform: uppercase;
}

.active {
  background-color: rgba(29, 102, 29, 0.646);
  color: white !important;
  font-weight: 600;
}
</style>
