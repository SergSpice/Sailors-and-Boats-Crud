<template>
  <a-modal
    :visible="visible"
    title="Adding Boat"
    okText="Create"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('create') }"
  >
    <a-form layout="vertical" :form="form">
      <a-form-item label="Boat's Name">
        <a-input
          v-decorator="[
              'bname',
              {
                rules: [{ required: true, message: 'Please input a name!' }],
              }
            ]"
        />
      </a-form-item>
      <a-form-item label="Color">
        <a-input
          v-decorator="[
            'color',
            {
              rules: [{ required: true, message: 'Please input a color' }],
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
