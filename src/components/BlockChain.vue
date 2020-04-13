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
  import blockChainService from '../services/BlockChainService';

  export default {
    name: 'BlockChain',
    components: {
        Block,
    },
    data: function () {
      return {
          chain: blockChainService.getChain()
      };
    }
  }
</script>
