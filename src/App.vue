<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BlockChain msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import BlockChain from './components/BlockChain.vue'

export default {
  name: 'App',
  components: {
    BlockChain,
  }
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
  color: #42b983;
}
</style>
