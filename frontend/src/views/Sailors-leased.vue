<template>
  <div>
    <div class="query">
      <a-alert
        v-if="listedSailors.length !== 0"
        message="Query realizada con exito!"
        description="SQL Query: 
            SELECT *
            FROM sailors
            WHERE NOT EXISTS (
              SELECT boats.id
              FROM boats
              WHERE NOT EXISTS (
                SELECT reserves.bid
                FROM reserves
                WHERE reserves.bid = boats.id
                AND reserves.sid = sailors.id
              )
            ) "
        type="success"
        showIcon
      />
      <a-alert
        v-else
        message="Error"
        description="SQL Query no pudo ser ejecutada :c"
        type="error"
        showIcon
      />
    </div>
    <div class="card-wrapper">
      <a-card
        :title="sailors.sname"
        :key="sailors.id"
        v-for="sailors in listedSailors"
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
      listedSailors: [],
      headStyle: {
        "background-color": "#F5F5F5"
      }
    };
  },
  created() {
    this.fetchSailors();
  },
  methods: {
    fetchSailors() {
      axios
        .get("http://localhost:1337/reserves/sailors-leased-all-boats")
        .then(response => {
          this.listedSailors = response.data;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.query {
  margin-bottom: 20px;
}
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 0.2fr));
  grid-gap: 20px;
}
</style>

