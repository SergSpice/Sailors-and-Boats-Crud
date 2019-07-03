<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo">
        <h3>Web Management System for Sailor's Schema</h3>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="250px" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :defaultOpenKeys="['sub1']"
          :style="{ height: 'calc(100vh - 64px)', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="user" />CRUD
            </span>
            <a-menu-item key="1" @click="changeText('CRUD', 'Sailors')"><router-link to="/crud/sailors">Sailors</router-link></a-menu-item>
            <a-menu-item key="2" @click="changeText('CRUD', 'Boats')"><router-link to="/crud/boats">Boats</router-link></a-menu-item>
            <a-menu-item key="3" @click="changeText('CRUD', 'Reserves')"><router-link to="/crud/reserves">Reserves</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="laptop" />Reportería
            </span>
            <a-menu-item key="5" @click="changeText('Reportería', 'Master-Detail')"><router-link to="/reporteria/master-detail">Master-Detail</router-link></a-menu-item>
            <a-menu-item
              key="6"
              @click="changeText('Reportería', 'Sailors who leased all boats')"
            ><router-link to="/reporteria/sailors-leased">Sailors who leased all boats</router-link></a-menu-item>
            <a-menu-item key="7" @click="changeText('Reportería', 'Boats by color')"><router-link to="/reporteria/boats-by-color">Boats by color</router-link></a-menu-item>
            <a-menu-item
              key="8"
              @click="changeText('Reportería', 'Sailors by rating')"
            ><router-link to="/reporteria/sailors-by-rating">Sailors by rating</router-link></a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>{{ b1 }}</a-breadcrumb-item>
          <a-breadcrumb-item>{{ b2 }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
        <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      b1: "CRUD",
      b2: "Sailors"
    };
  },
  methods: {
    changeText: function(b1, b2) {
      this.b1 = b1;
      this.b2 = b2;
    }
  }
};
</script>

<style lang="scss">
#components-layout-demo-top-side-2 .logo {
  height: 31px;
  margin: 16px 28px 16px 35%;
  float: left;
  justify-self: center;

  h3 {
    color: whitesmoke;
    height: 0px;
    margin: -15px;
    margin-left: 14px;
    font-weight: 600;
    font-size: 14pt;
  }
}
</style>
