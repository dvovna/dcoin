import config from '../../config';

class BlockChainService {
    async getChain() {
        const response = await fetch(`${config.api}/blockchain`);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Blockchain server doesn\'t work!');
        }
    }
}

export default new BlockChainService();
