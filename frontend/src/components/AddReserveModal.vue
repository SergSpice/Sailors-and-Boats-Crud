<template>
  <a-modal
    :visible="visible"
    :title="bool ? title : title2"
    okText="Create"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <a-form layout="vertical" :form="form">
      <a-form-item label="Day">
        <a-date-picker
          style="width: 50%"
          v-decorator="[
            'day',
            {
              rules: [{ required: true, message: 'Please input a day' }],
            }
            ]"
        />
      </a-form-item>
      <a-form-item label="Sailor">
        <a-select
          showSearch
          placeholder="Select a sailor"
          optionFilterProp="children"
          style="width: 200px"
          :filterOption="filterOption"
          v-decorator="[
            'sid',
            {
              rules: [{ required: true, message: 'Please input a Sailor' }],
            }
            ]"
        >
          <a-select-option :key='sailor.id' v-for="sailor in SailorData" :value='sailor.id'>{{ sailor.id }} - {{ sailor.sname }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Boat">
        <a-select
          showSearch
          placeholder="Select a boat"
          optionFilterProp="children"
          style="width: 200px"
          :filterOption="filterOption"
          v-decorator="[
            'bid',
            {
              rules: [{ required: true, message: 'Please input a Boat' }],
            }
            ]"
        >
          <a-select-option :key='boat.id' v-for="boat in BoatData" :value='boat.id'>{{ boat.id }} - {{ boat.bname }}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import axios from "axios";
export default {
  props: ["visible"],
  data() {
    return {
      SailorData: [],
      BoatData: [],
      bool: false,
      title: "Editing Boat",
      title2: "Adding Boat"
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  created() {
    this.fetchSailors();
    this.fetchBoats();
  },
  methods: {
    fetchSailors() {
      axios.get("http://localhost:1337/sailors").then(response => {
        this.SailorData = response.data
      });
    },
    fetchBoats() {
      axios.get("http://localhost:1337/boats").then(response => {
        this.BoatData = response.data;
      });
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toUpperCase()
          .indexOf(input.toUpperCase()) >= 0
      );
    }
  }
};
</script>
