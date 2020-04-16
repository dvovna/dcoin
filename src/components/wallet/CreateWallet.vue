<template>
  <section>
    <button v-on:click="this.createWallet">Generate</button>
    <p v-if="walletInfo">Public key, use it as wallet id: <span>{{walletInfo.publicKey}}</span></p>
    <p v-if="walletInfo">Private key, use it to subscribe transactions: <span>{{walletInfo.privateKey}}</span></p>
  </section>
</template>

<script>
  import walletService from '../../services/WalletService';

  export default {
    name: 'CreateWallet',
    data: () => ({
      walletInfo: null,
    }),
    methods: {
      createWallet: async function () {
        this.walletInfo = await walletService.createWallet();
      }
    }
  }
</script>

<style>
  section > p {
    font-size: 13px;
  }

  section > p > span {
    font-size: 9px;
  }
</style>