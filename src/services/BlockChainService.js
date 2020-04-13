class BlockChainService {
    getChain() {
        return [
            {
                hash: 'hashhashhash',
                timestamp: Date.now(),
                transactions: [{
                    timestamp: new Date().getTime(),
                    amount: 10,
                    fromAddress: 'from',
                    toAddress: 'to',
                }]
            }
        ]
    }
}

export default new BlockChainService();
