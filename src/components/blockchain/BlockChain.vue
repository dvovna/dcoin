<template>
  <ul class="blocks-list">
    <Block
            v-for="(block) in chain"
            v-bind:block="block"
            v-bind:key="block.hash" />
  </ul>
</template>

<script>
  import Block from './Block';
  import blockChainService from '../../services/BlockChainService';

  export default {
    name: 'BlockChain',
    components: {
        Block,
    },
    async created() {
        this.chain = await blockChainService.getChain();
    },
    data: () => ({
      chain: [],
    }),
  }
</script>

<style scoped>
  .blocks-list {
    display: inline-block;
  }
</style>
