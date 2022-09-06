<script>
import http from '../service/axios';

export default {
  data() {
    return {
      jobDetail: {},
    };
  },
  methods: {
    async getDetail() {
      const id = this.$route.params.id;
      const res = await http(`/job-details/${id}`);
      this.jobDetail = res.data;
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>

<template>
  <div class="job-detail-container bg-light">
    <h3>İlan Detayı - {{ jobDetail.positionName }}</h3>

    <div class="job-detail">
      <div class="company-info">
        <img src="https://via.placeholder.com/100" alt="" />
        <div class="company-name">
          <h4>
            {{ jobDetail.company }} <span class="badge text-bg-dark">{{ jobDetail.location }}</span>
          </h4>
          <div class="socials">
            <a :href="'//' + jobDetail.website" target="_blank">Website</a>
            <a :href="'//' + jobDetail.twitter" target="_blank">Twitter</a>
            <a :href="'//' + jobDetail.linkedin" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
      <hr />

      <div class="job-info">
        <h5>Açıklama</h5>
        <p>
          {{ jobDetail.description }}
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <h5>Opsiyonel</h5>
        <p>
          {{ jobDetail.niceToHave }}
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <h5>Avantajlar</h5>
        <p>
          {{ jobDetail.perks }}
          <br />
          <br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <hr />
      <div class="contact-info">
        <h5>İletişim</h5>
        <p>
          {{ jobDetail.address }}
          <br />
          {{ jobDetail.phone }}
        </p>
      </div>
    </div>

    <div class="job-date">
      {{ jobDetail.date }}
    </div>
  </div>
</template>

<style lang="scss">
.job-detail-container {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 12px;

  h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
  }

  .company-info {
    display: flex;
    align-items: center;

    .company-name {
      margin-left: 50px;

      .socials {
        display: flex;
        gap: 10px;
        justify-content: space-between;
        a {
          text-decoration: none;
          color: gray;
          &:hover {
            color: black;
            font-weight: 600;
          }
        }
      }
    }
  }

  .job-info {
    h5 {
      letter-spacing: 1px;
    }
    p {
      margin-bottom: 30px;
      font-weight: 400;
      color: darkslategray;
    }
  }

  .contact-info {
    h5 {
      letter-spacing: 1px;
    }
    p {
      font-weight: 400;
      color: darkslategray;
    }
  }

  .job-date {
    text-align: right;
    font-size: 0.8rem;
    color: gray;
  }
}
</style>
