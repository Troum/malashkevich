const ResponseHandler = {
    install(Vue) {
        Vue.prototype.$handler = (response) => {
            switch(response.status) {
                case 400:
                    Vue.prototype.$snotify.error(response.data.errors.error);
                    break;
                case 401:
                    Vue.prototype.$snotify.error(response.data.errors.error);
                    break;
                case 422:
                    for (let error in response.data.errors) {
                        Vue.prototype.$snotify.error(response.data.errors[error][0]);
                    }
                    break;
                case 500:
                    Vue.prototype.$snotify.error(response.data.errors.error);
                    break
            }
        };
    }
};

export default (ResponseHandler);
