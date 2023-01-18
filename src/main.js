import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import request from "./utils/request.js";
import * as echarts from 'echarts'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './router'


Vue.use(ElementUI,{size:'mini'});
Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(VueRouter)



// const demo = Vue.extend({})
// const d = new demo()

// // 组件通讯  d现在就是vc
// Vue.prototype.x = d


Vue.prototype.request = request;
Vue.prototype.$echarts = echarts
new Vue({
    render: h => h(App),
    router: router,
    //安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')