import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import ViewUI from "view-design";
import 'element-ui/lib/theme-chalk/index.css';
import 'view-design/dist/styles/iview.css';

import router from './router'

Vue.use(ElementUI);
// Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
    router,
    el:'#app',
    render: h => h(App),
}).$mount('#app');
