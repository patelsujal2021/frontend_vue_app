import { createStore } from 'vuex'

import authModule from './modules/auth';
import stockModule from './modules/stock';

export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth:authModule,
        stock:stockModule
    }
})
