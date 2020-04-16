<template>
  <form v-on:submit="this.createTransaction">
    <label>
      Enter your wallet id:
      <input type="text" v-model="fromAddress" />
    </label>
    <label>
      Enter receiver's wallet id:
      <input type="text" v-model="toAddress" />
    </label>
    <label>
      Enter amount:
      <input type="number" v-model="amount" />
    </label>
    <label>
      Enter secret key:
      <input type="text" v-model="secretKey" />
    </label>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
  import walletService from '../../services/WalletService';

  export default {
    name: 'Transaction',
    data: () => ({
      fromAddress: null,
      toAddress: null,
      amount: null,
      secretKey: null,
    }),
    methods: {
      createTransaction: function () {
        walletService.makeTransaction(this.fromAddress, this.toAddress, this.amount, this.secretKey);
      }
    }
  }
</script>

<style scoped>
  form {
    display: inline-flex;
    flex-direction: column;
    margin-top: 20px;
  }

  form > label {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    margin: 5px 0;
    width: 500px;
  }

  form > button {
    background: cornsilk;
    cursor: pointer;
    border: 0;
    outline: none;
    margin: 10px 0;
    padding: 10px;
  }

  form > button:active {
    box-shadow: 0 0 4px darkmagenta;
  }

  form > label > input {
    display: inline-flex;
    width: 300px;
  }
</style>