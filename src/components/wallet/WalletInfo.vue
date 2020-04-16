<template>
  <section>
    <label>
      Enter wallet id:
      <input type="text" name="walletId" v-model="walletId"/>
      <button v-if="walletId">Find</button>
    </label>
    <p v-if="walletId && !walletInfo &&!isLoading">There are no transactions yet!</p>
    <p v-if="walletInfo">Current balance: {{walletInfo.balance}}</p>
  </section>
  </template>

<script>
  import _ from 'lodash';
  import walletInfoService from '../../services/WalletService';

  export default {
    name: 'AccountInfo',
    data: () => ({
      walletId: null,
      walletInfo: null,
      isLoading: false,
    }),
    created: async function() {
      this.debouncedGetWalletInfo = _.debounce(walletInfoService.getWalletInfo, 500);
    },
    watch: {
      walletId: async function() {
        if (!this.walletId) {
          return null;
        }

        this.walletInfo = await this.debouncedGetWalletInfo(this.walletId);
      },
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    height: 200px;
    vertical-align: middle;
  }

  section > label {
    display: block;
    margin: auto;
  }
</style>