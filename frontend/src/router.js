import Vue from 'vue'
import Router from 'vue-router'
import Sailors from './views/Sailors.vue'
import Boats from './views/Boats.vue'
import Reserves from './views/Reserves.vue'
import MasterDetail from './views/Master-detail.vue'
import BoatsByColor from './views/Boatsbycolor.vue'
import SailorsLeased from './views/Sailors-leased.vue'
import SailorsByRating from './views/Sailorsbyrating.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/crud/sailors'
    },
    {
      path: '/crud/sailors',
      name: 'sailors',
      component: Sailors
    },
    {
      path: '/crud/boats',
      name: 'boats',
      component: Boats
    },
    {
      path: '/crud/reserves',
      name: 'reserves',
      component: Reserves
    },
    {
      path: '/reporteria/master-detail',
      name: 'masterdetail',
      component: MasterDetail
    },
    {
      path: '/reporteria/boats-by-color',
      name: 'boatsbycolor',
      component: BoatsByColor
    },
    {
      path: '/reporteria/sailors-leased',
      name: 'sailorsleased',
      component: SailorsLeased
    },
    {
      path: '/reporteria/sailors-by-rating',
      name: 'sailorsbyrating',
      component: SailorsByRating
    },
    
  ]
})
