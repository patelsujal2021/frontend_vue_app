<template>
    <div class="about">
       <form method="post" @submit.prevent="login_process()">
           Email : <input type="email" name="email" v-model="user.email" /> <br/>
           Password : <input type="password" name="password" v-model="user.password" /> <br/>
           <button type="submit">Login</button>
       </form>
    </div>
</template>

<script>
    export default {
        name:"LoginView",
        data(){
            return{
                user:{
                    email : 'test@example.com',
                    password : 123456789
                },
                validation_errors:[],
            }
        },
        methods:{
            login_process(){
                this.$store.dispatch('auth/user_login',this.user).then(response=>{
                    if(response.data.success == true){
                        localStorage.setItem('user_details',JSON.stringify(response.data.data.user));
                        localStorage.setItem('stock_management_token',response.data.data.token);
                        setTimeout(() => {
                            this.user = {};
                            this.$router.push({ name:'stocks' });
                        },1000)
                    } else if(response.data.success == false){
                        this.validation_errors = [];
                        this.validation_errors = response.data.data.errors;
                    }
                }).catch(error=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style>
    @media (min-width: 1024px) {
        .about {
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
    }
</style>
