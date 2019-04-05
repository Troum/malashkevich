<template>
    <b-row align-v="center" align-h="center" class="fullscreen w-100">
        <b-col cols="8" class="h-75">
            <b-card class="z-depth-1-half rounded-0 h-75" :title="$ml.get('dashboardNav.about.add')" >
                <editor mode="wysiwyg" :options="options"/>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    import Editor from '@toast-ui/vue-editor/src/editor.vue'
    export default {
        components: {
            Editor
        },
        data() {
            return {
                options: {
                    language: 'ru_RU'
                },
            }
        }
    }
</script>

<style scoped>

</style>
