import config from '../../config';

class WalletService {
  async getWalletInfo(walletId) {
      const response = await fetch(`${config.api}/wallet/${walletId}`);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Blockchain server doesn\'t work!');
      }
  }

  async createWallet() {
    const response = await fetch(`${config.api}/wallet/create`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Blockchain server doesn\'t work!');
    }
  }

  async makeTransaction(fromAddress, toAddress, amount, privateKey) {
    const response = await fetch(`${config.api}/transaction/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({fromAddress, toAddress, amount, privateKey})
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Blockchain server doesn\'t work!');
    }
  }
}

export default new WalletService();
