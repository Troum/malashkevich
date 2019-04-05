<template>
    <b-row class="fullscreen m-0 p-0">
        <sidebar-menu @collapse="onCollapse" :menu="menu" :show-one-child="true" />
        <b-col :cols="cols.col" :class="['d-flex align-items-center', cols.margin]">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        data() {
            return {
                cols: {
                    col: 10,
                    margin: 'ml-auto'
                },
                menu: [
                    {
                        title: this.$ml.get('dashboardNav.photos.title'),
                        icon: 'far fa-image',
                        child: [
                            {
                                href: '/dashboard/photos',
                                title: this.$ml.get('dashboardNav.photos.all'),
                            },
                            {
                                href: '/dashboard/photos/create',
                                title: this.$ml.get('dashboardNav.photos.add'),
                            }
                        ]
                    },
                    {
                        title: this.$ml.get('dashboardNav.about.title'),
                        icon: 'fas fa-pencil-alt',
                        child: [
                            {
                                href: '/dashboard/about',
                                title: this.$ml.get('dashboardNav.about.add'),
                            },
                            {
                                href: '/dashboard/about/edit',
                                title: this.$ml.get('dashboardNav.about.edit'),
                            }
                        ]
                    },

                ]
            }
        },
        mounted() {

        },
        methods: {
            onCollapse(collapsed) {
                collapsed ? this.cols.col = 12 : this.cols.col = 10;
            }
        }
    }
</script>
