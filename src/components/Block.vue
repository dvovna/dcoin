<template>
  <li>
    <p>Block hash: {{block.hash}}</p>
    <p>Block created: {{new Date(block.timestamp)}}</p>

    <TransactionsList v-bind:transactions="block.transactions"></TransactionsList>
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