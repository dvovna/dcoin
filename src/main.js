import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import RouteName from './common/RouteName';
import BlockChain from './components/blockchain/BlockChain';
import WalletInfo from './components/wallet/WalletInfo';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: RouteName.ViewBlockchain, component: BlockChain },
    { path: RouteName.ViewWalletInfo, component: WalletInfo }
  ]
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
