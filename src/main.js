import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import RouteName from './common/RouteName';
import BlockChain from './components/blockchain/BlockChain';
import WalletInfo from './components/wallet/WalletInfo';
import Transaction from './components/transaction/Transaction';
import CreateWallet from './components/wallet/CreateWallet';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: RouteName.ViewBlockchain, component: BlockChain },
    { path: RouteName.ViewWalletInfo, component: WalletInfo },
    { path: RouteName.CreateWallet, component: CreateWallet },
    { path: RouteName.MakeTransaction, component: Transaction }
  ]
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
