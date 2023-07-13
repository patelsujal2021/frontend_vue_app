import axiosapi from '@/services/axiosapi';

const state = {
};

// getters
const getters = {
};

// actions
const actions = {
    get_stocks(context,filters){
        return new Promise((resolve,reject)=>{
            var userToken = localStorage.getItem('stock_management_token');
            axiosapi.get('/stock',{
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${userToken}`
                }
            }).then(response=>{
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        });
    }
};

// mutations
const mutations = {
};

export default {
    namespaced: true,
    name: 'stock',
    state,
    getters,
    actions,
    mutations
}