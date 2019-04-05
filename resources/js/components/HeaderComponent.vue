<template>
    <b-navbar :fixed="new RegExp('/login').test($route.path) || new RegExp('/register').test($route.path) || new RegExp('/dashboard/*').test($route.path) ? 'top' : false"
              toggleable="lg" type="light" variant="light" class="w-100">
        <b-navbar-brand href="#"><router-link class="nav-link text-dark" to="/">MALASHKEVICH</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="new RegExp('/login').test($route.path) || new RegExp('/register').test($route.path) || new RegExp('/dashboard/*').test($route.path) ? false : true" v-for="(item, i) of $ml.get('menu')" :key="i">
                    <router-link class="nav-link" :to="item.link">{{ item.title }}</router-link>
                </b-nav-item>
                <b-nav-item v-if="$route.path ==='/register' || $route.path ==='/login'" >
                    <router-link  class="nav-link" to="/register">{{ $ml.get('dashboardMenu.register') }}</router-link>
                </b-nav-item>
                <b-nav-item v-if="$route.path ==='/register' || $route.path ==='/login'" >
                    <router-link  class="nav-link" to="/login">{{ $ml.get('dashboardMenu.login') }}</router-link>
                </b-nav-item>
                <b-nav-item v-if="new RegExp('/dashboard/*').test($route.path)">
                    <router-link  class="nav-link" to="/logout">{{ $ml.get('dashboardMenu.logout') }}</router-link>
                </b-nav-item>
                <b-nav-item v-if="$ml.current === 'RU'" @click="$ml.change('EN')"><span class="nav-link">EN</span></b-nav-item>
                <b-nav-item v-if="$ml.current === 'EN'" @click="$ml.change('RU')"><span class="nav-link">RU</span></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
