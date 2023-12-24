const crypto = require('crypto');

class Blockchain {
  constructor() {
    this.chain = [];
  }

  addBlock(transactions) {
    const previousBlock = this.chain[this.chain.length - 1];
    const index = this.chain.length;
    const timestamp = Date.now();
    const newBlock = {
      index,
      timestamp,
      transactions,
      previousHash: previousBlock ? previousBlock.hash : null,
    };
    newBlock.hash = this.calculateBlockHash(newBlock);
    this.chain.push(newBlock);
    return newBlock;
  }

  calculateBlockHash(block) {
    const blockData ="${block.index}${block.timestamp}${JSON.stringify(block.transactions)}${block.previousHash}";
    return crypto.createHash('sha256').update(blockData).digest('hex');
  }
}

class MerkleTree {
  constructor(transactions) {
    this.transactions = transactions;
    this.tree = this.buildTree();
  }

  buildTree() {
    const leaves = this.transactions.map(transaction => crypto.createHash('sha256').update(transaction).digest('hex'));
    const tree = [];

    tree.push(...leaves);

    for (let i = leaves.length - 1; i > 0; i -= 2) {
      const left = tree[i - 1];
      const right = tree[i];
      const combined = crypto.createHash('sha256').update(left + right).digest('hex');
      tree.unshift(combined);
    }

    return tree;
  }

  getRoot() {
    return this.tree[0];
  }
}

const blockchain = new Blockchain();

const transactions = ['Transaction 1', 'Transaction 2', 'Transaction 3'];
const block = blockchain.addBlock(transactions);

console.log('Blockchain:', blockchain.chain);

const merkleTree = new MerkleTree(transactions);

console.log('Merkle Tree Root:', merkleTree.getRoot());