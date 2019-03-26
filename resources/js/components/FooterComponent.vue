<template>
    <b-navbar sticky toggleable="lg" type="dark" variant="dark" class="w-100 footer">
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="mx-auto">
                <b-nav-item href="#" v-html="$ml.get('rights.text')" class="text-white"></b-nav-item>
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
