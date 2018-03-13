import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser and metamask is running
   // console.log("browser provider: "); console.log(window.web3.currentProvider)
    web3 = new Web3(window.web3.currentProvider);
   // console.log(web3)
} else {
    // we are on the server or not meta mask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/5OOJ1Way61hHBHtEwlhw');
   // console.log("http provider: "+ provider);
    web3 = new Web3(provider);
}

export default web3;
