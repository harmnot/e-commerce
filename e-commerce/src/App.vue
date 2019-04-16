<template>
  <div id="app">
    <Header> </Header>
    <!-- <div id="nav"> -->
    <!-- <div class="d-flex justify-content-center">
      <div class="">
        shop
      </div>
      <div class="">
        about us
      </div>
    </div> -->
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view />
  </div>
</template>

<script>
import Header from './header/navbar.vue';
export default {
  components: { Header },
};
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
