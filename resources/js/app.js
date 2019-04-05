import './bootstrap';
import Vue from 'vue';
import Snotify from 'vue-snotify';
import BootstrapVue from 'bootstrap-vue';
import AxiosPlugin from './plugins/axios-plugin';
import ResponseHandler from './plugins/response-handler';
import VueClazyLoad from 'vue-clazy-load';
import VueClazyLoadConfrig from './configs/vueclazyload.config';
import VueSidebarMenu from 'vue-sidebar-menu';
import Routes from './routes';
import './ml';
import App from './view/App';

Vue.use(Snotify);
Vue.use(BootstrapVue);
Vue.use(AxiosPlugin);
Vue.use(ResponseHandler);
Vue.use(VueClazyLoad, VueClazyLoadConfrig);
Vue.use(VueSidebarMenu);

const app = new Vue({
    router: Routes,
    el: '#app',
    render: h => h(App)
});

export default app;
