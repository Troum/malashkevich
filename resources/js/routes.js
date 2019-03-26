import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

import DashboardComponent from './components/DashboardComponent';
import LoginComponent from './components/LoginComponent';
import LogoutComponent from './components/LogoutComponent';
import RegisterComponent from './components/RegisterComponent';
import GreetingComponent from './components/GreetingComponent';
import GalleryComponent from './components/GalleryComponent';
import FeedbackComponent from './components/FeedbackComponent';
import ScheduleComponent from './components/ScheduleComponent';
import AboutComponent from './components/AboutComponent';
import CreatePhotosComponent from './components/dashboard_components/CreatePhotosComponent';
import EditPhotoController from './components/dashboard_components/EditPhotoComponent';
import ShowPhotosComponent from './components/dashboard_components/ShowPhotosComponent';
import ShowPhotoComponent from './components/dashboard_components/ShowPhotoComponent';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardComponent,
            meta: { requiresAuth: true },
            children: [
                {
                    path: 'photos',
                    component: ShowPhotosComponent
                },
                {
                    path: 'photos/create',
                    component: CreatePhotosComponent
                },
                {
                    path: 'photos/:photo/edit',
                    component: EditPhotoController
                },
                {
                    path: 'photos/:photo',
                    component: ShowPhotoComponent
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        },
        {
            path: '/logout',
            name: 'logout',
            component: LogoutComponent
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterComponent
        },
        {
            path: '/',
            name: 'home',
            component: GreetingComponent
        },
        {
            path: '/about',
            name: 'about',
            component: AboutComponent
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: ScheduleComponent
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: FeedbackComponent
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: GalleryComponent
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
        next({ name: 'login' });
        return
    }
    if(to.path === '/login' && store.state.isLoggedIn) {
        next({ name: 'dashboard' });
        return
    }
    next()
});

export default router;
