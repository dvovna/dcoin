<template>
  <div id="app">
    <router-link class="main-logo" to="/">d-coin</router-link>
    <Navigation msg="Welcome to Your Vue.js App"/>
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-logo {
  text-transform: uppercase;
  color: darkmagenta;
  margin-bottom: 15px;
  font-style: oblique;
  font-weight: 900;
  font-size: 30px;
  text-underline: none;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: black;
}
</style>
