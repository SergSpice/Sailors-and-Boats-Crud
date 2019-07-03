<template>
  <a-table :columns="columns" :dataSource="data" bordered size="small" rowKey="id">
    <template
      v-for="col in ['sname', 'rating', 'age']"
      :slot="col"
      
      slot-scope="text, record"
    >
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.id, col)"
        />
        <template v-else>{{text}}</template>
      </div>
    </template>
    <template slot="operation" slot-scope="text, record">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => save(record.id)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.id)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a @click="() => edit(record.id)">Edit</a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script>
import axios from 'axios'

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: "10%",
    scopedSlots: { customRender: "id" }
  },
  {
    title: "Name",
    dataIndex: "sname",
    width: "35%",
    scopedSlots: { customRender: "sname" }
  },
  {
    title: "Rating",
    dataIndex: "rating",
    width: "10%",
    scopedSlots: { customRender: "rating" }
  },
  {
    title: "Age",
    dataIndex: "age",
    width: "10%",
    scopedSlots: { customRender: "age" }
  },
  {
    title: "Operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" }
  }
];

export default {
  data() {
    return {
      data: [],
      columns
    };
  },
  methods: {
    fetchSailors() {
      axios.get("http://localhost:1337/sailors").then(response => {
        this.data = response.data;
      });
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.id)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.id)[0];
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.id)[0];

      axios
      .put(`http://localhost:1337/sailors/${target.id}`, {sname: target.sname, rating:target.rating, age:target.age})
      .then(response => {
        console.log(response);
      });
      if (target) {
        delete target.editable;
        this.data = newData;
        this.cacheData = newData.map(item => ({ ...item }));
      }
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.id)[0];
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => key === item.id)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    }
  },
  created() {
    this.fetchSailors();
  }
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
