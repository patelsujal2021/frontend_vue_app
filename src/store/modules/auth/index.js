import axiosapi from '@/services/axiosapi';

const state = {
    user_details: {}
};

// getters
const getters = {
    getter_user_details: state => state.user_details,
};

// actions
const actions = {
    user_login(context,user_details){
        return new Promise((resolve,reject)=>{
            axiosapi.post('/auth/login',user_details).then(response=>{
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        });
    },
    user_logout(context){
        return new Promise((resolve,reject)=>{
            var userToken = localStorage.getItem('stock_management_token');
            axiosapi.get('/auth/logout',{
                headers:{
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${userToken}`
                }
            }).then(response=>{
                if(response.data.success == true) {
                    context.commit('SET_USERDETAILS', {});
                }
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        });
    }
};

// mutations
const mutations = {
    SET_USERDETAILS(state,user_details){
        state.user_details = user_details;
    }
};

export default {
    namespaced: true,
    name: 'auth',
    state,
    getters,
    actions,
    mutations
}