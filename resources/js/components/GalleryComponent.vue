<template>
    <b-row class="fullscreen m-0 p-0" id="gallery">
        <b-col cols="4" class="d-flex align-items-center bg-dark">
            <b-row class="w-100" align-h="center" align-v="center">
                <b-col cols="6">
                    <h1 class="display-1 text-white"></h1>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="8" class="d-flex justify-content-center align-content-center bg-light  gallery-container" id="galleryContainer">
            <b-row class="align-self-center m-auto images">
                <b-col cols="4" class="item" v-for="(item, i) in images" :key="i">
                    <clazy-load :src="'/images/photos/' + item.photo">
                        <img class="img-fluid" :src="'/images/photos/' + item.photo" alt="Image">
                        <div class="d-flex justify-content-center align-content-center" slot="placeholder">
                            <preloader-component class="align-self-center m-auto"></preloader-component>
                        </div>
                    </clazy-load>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
    import PreloaderComponent from './PreloaderComponent';
    export default {
        components: {
          PreloaderComponent
        },
        data() {
            return {
                images: []
            }
        },
        beforeMount() {
            this.$axios.get('/api/photos')
                .then( response => {
                    this.images = response.data.photos;
                } );
        }
    }
</script>

<style scoped>

</style>
