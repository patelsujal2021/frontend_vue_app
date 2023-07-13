import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import middlewarePipeline from "./middlewares/middlewarePipeline";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const app = createApp(App)

app.use(router)

app.use(store)

app.component('EasyDataTable', Vue3EasyDataTable);

router.beforeEach((to, from, next) => {
    if(!to.meta.middleware){
        return next();
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
});

app.mount('#app')
