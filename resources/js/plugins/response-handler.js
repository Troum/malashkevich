const ResponseHandler = {
    install(Vue) {
        Vue.prototype.$handler = (response) => {
            switch(response.status) {
                case 200:
                    Vue.prototype.$snotify.success(response.data.success);
                    break;
                case 400:
                    Vue.prototype.$snotify.error(response.data.error);
                    break;
                case 401:
                    Vue.prototype.$snotify.error(response.data.errors.error);
                    break;
                case 409:
                    Vue.prototype.$snotify.error(response.data.error);
                    break;
                case 422:
                    for (let error in response.data.errors) {
                        Vue.prototype.$snotify.error(response.data.errors[error][0]);
                    }
                    break;
                case 500:
                    Vue.prototype.$snotify.error(response.data.error);
                    break
            }
        };
    }
};

export default (ResponseHandler);
