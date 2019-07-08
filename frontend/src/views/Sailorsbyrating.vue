<template>
  <div>
    <div class="alerts">
      <a-alert v-if="alerInfo === 0 " message="Filtrar sailors por un rating mayor al ingresado" type="info" showIcon />
      <a-alert v-else-if="listedBoats.length !== 0" message="Sailors encontrados!" type="success" showIcon />
      <a-alert v-else message="No existe ningun sailor con un tal rating" type="error" showIcon />
    </div>
    <div class="search">
      <a-input-search type="number" :min="1" placeholder="input search text" style="width: 200px" @search="onSearch" />
    </div>
    <div class="card-wrapper">
      <a-card
        :title="sailors.sname"
        :key="sailors.id"
        v-for="sailors in listedBoats"
        :headStyle="headStyle"
      >
        <p>
          <strong>ID: </strong>
          {{ sailors.id }}
        </p>
        <p>
          <strong>Name: </strong>
          {{sailors.sname}}
        </p>
        <p>
          <strong>Rating: </strong>
          {{sailors.rating}}
        </p>
        <p>
          <strong>Age: </strong>
          {{sailors.age}}
        </p>
      </a-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      listedBoats: [],
      headStyle: {
        "background-color": "#F5F5F5"
      },
      alerInfo: 0
    };
  },
  methods: {
    onSearch(value) {
      axios.get(`http://localhost:1337/sailors/rating/${value}`).then(response => {
        this.listedBoats = response.data;

        this.alerInfo = 1
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.alerts {
  margin-bottom: 20px;
}
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 0.2fr));
  grid-gap: 20px;
}
.search {
  margin-bottom: 20px;
}
</style>

