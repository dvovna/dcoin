<template>
  <section>
    <h3>Block transactions:</h3>
    <ul>
      <li v-for="transaction in transactions" v-bind:key="transaction.hash">
        <p>Date: <span>{{new Date(transaction.timestamp)}}</span></p>
        <p>Amount: <span>{{transaction.amount}}</span></p>
        <p>From: <span>{{transaction.fromAddress}}</span></p>
        <p>To: <span>{{transaction.toAddress}}</span></p>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props: ['transactions']
  }
</script>
