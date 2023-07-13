<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <button v-if="user != null" type="button" @click="logout_process()">Logout</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
  export default {
    data(){
      return{
        user:null
      }
    },
    methods:{
      logout_process(){
        this.$store.dispatch('auth/user_logout',this.user).then(response=>{
          if(response.data.success == true){
            localStorage.removeItem('user_details');
            localStorage.removeItem('stock_management_token');
            setTimeout(() => {
              this.$router.push({ name:'login' });
            },1000)
          }
        }).catch(error=>{
          console.log(error);
        });
      },
      user_details(){
        var user_details = localStorage.getItem("user_details");
        if(user_details !== null) {
          this.user = JSON.parse(user_details);
        } else {
          this.$router.push({ name:'login' });
        }
      }
    },
    created() {
      this.user_details();
    }
  }
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
