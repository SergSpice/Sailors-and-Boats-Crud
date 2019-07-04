<template>
  <a-modal
    :visible="visible"
    title="Adding Sailor"
    okText="Create"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <a-form layout="vertical" :form="form">
      <a-form-item label="Sailor's Name">
        <a-input
          v-decorator="[
              'sname',
              {
                rules: [{ required: true, message: 'Please input a name!' }],
              }
            ]"
        />
      </a-form-item>
      <a-form-item label="Rating">
        <a-input
          type="number"
          v-decorator="[
            'rating',
            {
              rules: [{ required: true, message: 'Please input a rating' }],
            }
            ]"
        />
      </a-form-item>
      <a-form-item label="Age">
        <a-input
          type = 'number'
          v-decorator="[
            'age',
            {
              rules: [{ required: true, message: 'Please input a age' }],
            }
            ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  props: ["visible"],
  beforeCreate() {
    this.form = this.$form.createForm(this);
  }
};
</script>
