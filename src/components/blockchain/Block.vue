<template>
  <li class="block">
    <p>Hash: {{block.hash || 'n\\a'}}</p>
    <p>Block created: {{new Date(block.timestamp)}}</p>

    <TransactionsList v-if="block.transactions" v-bind:transactions="block.transactions"></TransactionsList>
    <p v-if="block.transactions">Generic block doesn't have any transactions!</p>
  </li>
</template>

<script>
  import TransactionsList from './TransactionsList';

  export default {
    components: {
      TransactionsList,
    },
    props: ['block']
  };
</script>

<style scoped>
  .block {
    display: inline-block;
    padding: 0 5px;
    box-shadow: 0 0 5px darkmagenta;
    margin: 5px;
    width: 600px;
  }

  .block:hover {
  }
</style>