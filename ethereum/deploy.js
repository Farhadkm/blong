const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledBelonginBuilder = require('./build/BelongingBuilder.json');

const provider = new HDWalletProvider(
    'enter jelly detail bubble limit giggle bargain warm service hire sugar include',
    'https://rinkeby.infura.io/5OOJ1Way61hHBHtEwlhw');

const web3 = new Web3(provider);

let factory;

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const builder = await new web3.eth.Contract(JSON.parse(compiledBelonginBuilder.interface))
    .deploy({data: compiledBelonginBuilder.bytecode})
    .send({gas:'1000000', from: accounts[0]})
    console.log(builder.options.address)
}

deploy();