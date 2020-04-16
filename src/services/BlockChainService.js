import config from '../../config';

class BlockChainService {
    async getChain() {
        const response = await fetch(`${config.api}/blockchain`);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Blockchain server doesn\'t work!');
        }

        // return [
        //     {
        //         hash: 'hashhashhash',
        //         timestamp: Date.now(),
        //         transactions: [{
        //             timestamp: new Date().getTime(),
        //             amount: 10,
        //             fromAddress: 'from',
        //             toAddress: 'to',
        //         }]
        //     }
        // ]
    }
}

export default new BlockChainService();
