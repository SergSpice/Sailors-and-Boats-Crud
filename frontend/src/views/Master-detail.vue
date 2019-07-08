<template>
  <div>
    <div class="select">
      <a-select
        showSearch
        placeholder="Select a sailor"
        optionFilterProp="children"
        style="width: 200px"
        @change="handleChange"
        :filterOption="filterOption"
      >
        <a-select-option
          :key="sailor.id"
          v-for="sailor in sailorsData"
          :value="sailor.id"
        >{{ sailor.sname }} ({{ sailor.id }})</a-select-option>
      </a-select>
    </div>
    <div class="reservas" v-if="fetchedReserves.length !== 0">
      <a-collapse @change="changeActivekey" :bordered="true">
        <a-collapse-panel
          :key="detail.id"
          v-for="detail in fetchedReserves"
          :header="'Reserva ID: '+detail.id"
        >
        <a-divider />
          <div class="detail">
            <a-col :span="6">
              <h3>Reserva</h3>
              <a-row>
                <a-col>
                  <strong>ID:</strong>
                  {{detail.id}}
                  <br />
                  <strong>Fecha:</strong>
                  {{ detail.day }}
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="8">
              <h3>Sailor</h3>
              <a-row>
                <a-col :span="10">
                  <strong>ID:</strong>
                  {{detail.sid.id}}
                  <br />
                  <strong>Name:</strong>
                  {{ detail.sid.sname }}
                </a-col>
                <a-col :span="12">
                  <strong>Rating:</strong>
                  {{detail.sid.rating}}
                  <br />
                  <strong>Age:</strong>
                  {{ detail.sid.age }}
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="6">
              <h3>Boat</h3>
              <a-row>
                <a-col :span="12">
                  <strong>ID:</strong>
                  {{detail.bid.id}}
                  <br />
                  <strong>Name:</strong>
                  {{ detail.bid.bname }}
                </a-col>
                <a-col :span="12">
                  <strong>Color:</strong>
                  {{detail.bid.color}}
                </a-col>
              </a-row>
            </a-col>
          </div>
          <a-divider />
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div v-else>No Data</div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      sailorsData: [],
      fetchedReserves: []
    };
  },
  created() {
    this.fetchSailors();
    console.log(this.fetchedReserves);
  },
  methods: {
    fetchSailors() {
      axios.get("http://localhost:1337/sailors").then(response => {
        this.sailorsData = response.data;
      });
    },
    changeActivekey(key) {
      console.log(key);
    },
    handleChange(value) {
      axios
        .get(`http://localhost:1337/reserves/sailor/${value}`)
        .then(response => {
          this.fetchedReserves = response.data;
          this.fetchedReserves.forEach(item => {
            item.day = new Date(item.day).toLocaleDateString();
          });
        });
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    }
  }
};
</script>

<style lang="scss">
div {
  .select {
    margin-bottom: 20px;
  }
  .reservas {
    .detail {
      padding-left: 25px;
      margin-top: -22px;
    }
  }
}
</style>
