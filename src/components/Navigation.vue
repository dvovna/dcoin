<template>
  <section>
    <router-link to="/view-blockchain">View blockchain</router-link>
    <router-link to="/view-wallet-info">Check wallet</router-link>
    <router-link to="/make-transaction">Make a transaction</router-link>
  </section>
</template>

<script>
  export default {
    name: 'Navigation',
  }
</script>

<style scoped>
  a {
    display: inline-block;
    padding: 12px;
    font-size: 16px;
    text-decoration: none;
  }

  a:hover {
    color: darkmagenta;
  }
</style>