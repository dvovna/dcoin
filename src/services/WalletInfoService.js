import config from '../../config';

class WalletInfoService {
  async getWalletInfo(walletId) {
      const response = await fetch(`${config.api}/wallet/${walletId}`);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Blockchain server doesn\'t work!');
      }
  }
}

export default new WalletInfoService();
