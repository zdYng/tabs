import Vue from "vue";

import VueRouter from"vue-router";//引入组件import home from "./home.vue";

import Layout from '../components/Layout.vue';
import Layout2 from '../components/Layout2.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import TabHome from '@/views/home/TabHome.vue';
import TabHome2 from '@/views/home/TabHome2.vue';
import TabHome3 from '@/views/home/TabHome3.vue';

Vue.use(VueRouter); // 注册

const routes = [
    {
        path:'/tabHome3',
        name:'TabHome3',
        component: TabHome3,
    },
    {
        path:'/tabHome2',
        name: 'TabHome2',
        component: TabHome2,
    },
    {
        path:'/tabHome',
        name: 'TabHome',
        component: TabHome,
    },
    {
        path:'/layout',
        name: 'Layout',
        component: Layout
    },
    {
        path:'/layout2',
        name: 'Layout2',
        component: Layout2
    },
    {
        path:'/hello',
        name: 'Hello',
        component: HelloWorld
    }

]

const router =new VueRouter(
    {
        routes: routes,
        mode: "hash"
    }
)

export default router
