<template>
  <div>
    <div class="alerts">
      <a-alert v-if="alerInfo === 0 " message="Filtrar boats por color" type="info" showIcon />
      <a-alert v-else-if="listedBoats.length !== 0" message="Boats encontrados!" type="success" showIcon />
      <a-alert v-else message="No existe ningun boat con ese color!" type="error" showIcon />
    </div>
    <div class="search">
      <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
    </div>
    <div class="card-wrapper">
      <a-card
        :title="boats.bname"
        :key="boats.id"
        v-for="boats in listedBoats"
        :headStyle="headStyle"
      >
        <p>
          <strong>ID:</strong>
          {{ boats.id }}
        </p>
        <p>
          <strong>Name:</strong>
          {{boats.bname}}
        </p>
        <p>
          <strong>Color:</strong>
          {{boats.color}}
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
      axios.get(`http://localhost:1337/boats/color/${value}`).then(response => {
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

