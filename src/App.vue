<template>
  <div id="app">
    <p v-if="isLoggedIn"><Sidebar /></p>
   <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Sidebar from './components/sidebar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  },
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #556d7c;
  margin: 0px;
  padding: 0px;
  /* background-color: #212b31; */
}

</style>
