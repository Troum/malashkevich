import axios from 'axios';

let token = document.head.querySelector('meta[name="csrf-token"]');
const AxiosPlugin = {
    install(Vue) {
        Vue.prototype.$axios = axios.create({
            baseURL: 'http://localhost:8000/api/',
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'X-Requested-With' : 'XMLHttpRequest',
                'X-CSRF-TOKEN' : token ? token : console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
            },
            withCredentials: true,
            crossDomain: true
        });
    }
};

export default (AxiosPlugin);
