import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'
import CSS from '../pages/CSS/CSS.vue'
import CSSQA from '../pages/CSS/CSSQA.vue'
const routes = [
  {
    path: '/',
    component: Layout,
    // children: [
    // 	{ path: 'cssinter', component: CSS }
    // ],
  },
  {
    path: '/cssinter',
    component: CSS,
  },
  {
    path: '/cssqa',
    component: CSSQA,
  },
]

export default createRouter({
	history: createWebHashHistory(),
	routes,
})
