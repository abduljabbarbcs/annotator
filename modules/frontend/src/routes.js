import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard';
import Annotator from './components/Annotator';


Vue.use(VueRouter);
// Applications routes
const router = new VueRouter({
    made:'history',
    routes:[
        {
            path:'/dashboard',
            name:'Dashboard',
            component: Dashboard
        },
        {
            path:'/dashboard/:image?',
            name:'Annotator',
            component: Annotator
        },
        { path: '', redirect: '/dashboard' }
    ]
});

export default router;
