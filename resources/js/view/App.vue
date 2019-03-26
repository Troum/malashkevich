<template>
        <b-row class="m-0 p-0">
                <b-col cols="12" class="m-0 p-0">
                        <header-component></header-component>
                </b-col>
                <b-col cols="12" class="m-0 p-0">
                        <transition name="slide-fade">
                                <router-view></router-view>
                        </transition>
                </b-col>
                <vue-snotify></vue-snotify>
        </b-row>
</template>

<script>
        import store from '../store';
        import HeaderComponent from '../components/HeaderComponent';
        export default {
                components: {
                        HeaderComponent
                },
                created() {
                        if(localStorage.token) {
                                this.$axios.get('/api/user', {
                                                headers: {
                                                        Authorization: 'Bearer ' + localStorage.getItem('token')
                                                }
                                        },
                                ).then( response => {
                                        store.commit('loginUser');
                                }).catch(error => {
                                        if (error.response.status === 401 || error.response.status === 403) {
                                                store.commit('logoutUser');
                                                localStorage.setItem('token', '');
                                                this.$router.push({name: 'login'});
                                        }

                                });
                        }
                }
        }
</script>

<style scoped>

</style>
