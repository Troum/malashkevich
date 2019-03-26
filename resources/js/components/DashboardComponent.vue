<template>
    <b-row class="fullscreen m-0 p-0">
        <b-col cols="2" class="d-flex align-items-center bg-dark">
            <b-row class="w-100" align-h="center" align-v="center">
                <b-col cols="6">

                </b-col>
            </b-row>
        </b-col>
        <b-col cols="10" class="d-flex align-items-center bg-info ">
            <router-view></router-view>
        </b-col>
    </b-row>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
