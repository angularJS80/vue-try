// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vue2Filters from 'vue2-filters'
import VModal from 'vue-js-modal'
import BootstrapVue from 'bootstrap-vue';
import Icon from 'vue-awesome/components/Icon';



/*index.html 에 cdn bootstrap 를 활성화 하고 아래 주석처리 해야 기존 메뉴 작동*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import '../node_modules/vue-awesome/icons';
















import $ from 'jquery'
import jQuery from 'jquery'

Vue.config.productionTip = false
Vue.use(Vue2Filters)
Vue.use(VModal, { dynamic: true })
Vue.use(BootstrapVue)

Vue.component('icon', Icon);
Vue.config.errorHandler = function ( err, vm, info ) {
  console.log(err)
console.log("errorHandler : "+ info)
}


/*게시판관련 추가 사항 S*/
import axios from 'axios'
import cfg from '../static/cfg';
import moment from 'moment';
Vue.prototype.$axios = axios;
Vue.prototype.$cfg = cfg;
Vue.prototype.$moment = moment;

/*게시판관련 추가 사항 E*/



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
