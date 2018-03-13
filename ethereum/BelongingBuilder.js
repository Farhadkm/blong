import web3 from './web3';
import belongingBuilder from './build/BelongingBuilder.json';

export default new web3.eth.Contract(JSON.parse(belongingBuilder.interface),
    '0xBe1FF837F7DBFB321f035e2E74f984Ec2B873AA4');