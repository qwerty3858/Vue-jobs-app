<template>
  <div class="job-grid-container bg-light">
    <div class="job-row">
      <div class="job-grid-item">
        <div class="p-3">
          <h3>Uzman</h3>
          <h4>17.577 <span>açık pozisyon </span></h4>
        </div>
      </div>
      <div class="job-grid-item">
        <div class="p-3">
          <h3>Yönetici</h3>
          <h4>3.142 <span>açık pozisyon </span></h4>
        </div>
      </div>
      <div class="job-grid-item">
        <div class="p-3">
          <h3>Yeni Mezun</h3>
          <h4>8.024 <span>açık pozisyon </span></h4>
        </div>
      </div>
    </div>
    <div class="job-row">
      <div class="job-grid-item">
        <div class="p-3">
          <h3>Mavi Yaka</h3>
          <h4>12.430 <span>açık pozisyon </span></h4>
        </div>
      </div>
      <div class="job-grid-item">
        <div class="p-3">
          <h3>Hizmet Personeli</h3>
          <h4>2.965 <span>açık pozisyon </span></h4>
        </div>
      </div>
      <div class="job-grid-item">
        <div class="p-3">
          <h3>Engelli</h3>
          <h4>1.234 <span>açık pozisyon </span></h4>
        </div>
      </div>
    </div>
  </div>

  <div class="message-container bg-light">
    <h1>Fırsatları kaçırma, hemen değerlendir...</h1>
  </div>
</template>

<style lang="scss">
.job-grid-container {
  margin-top: 20px;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;

  .job-row {
    display: flex;
    justify-content: space-between;
  }

  .job-grid-item {
    border: 1px solid gray;
    border-radius: 12px;
    width: 32%;

    h3 {
      color: rgb(29, 102, 29);
      font-weight: 700;
      font-size: 1.5rem;
    }

    h4 {
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 2rem;

      span {
        font-size: 1rem;
        color: gray;
      }
    }
  }
}

.message-container {
  width: 100%;
  border-radius: 12px;
  margin-top: 20px;
  padding: 10px;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 2px;
  }
}
</style>
