pragma solidity ^0.4.17;

contract BelongingBuilder {
    
    mapping (address => bool) public belongings;
    mapping (address => address[]) public userBelongings;
    
    function createBelonging(string n, string d) public returns (address) {
        address belongingAddress = new Belonging(msg.sender,n,d);
        belongings[belongingAddress] = true;
        userBelongings[msg.sender].push(belongingAddress);
        return belongingAddress;
    }   

    function getUserBelongings() public view returns (address[]) {
        return userBelongings[msg.sender];
    }
}
contract Belonging {

    address public owner;
    address public creator;
    string public description;
    string public name;
    uint public createTime;
    uint public ownTime;
    
    modifier ownerAccess {
        require(owner == msg.sender);
        _;
    }
    function Belonging(address c, string n,string d) public {
            description = d;
            name = n;
            creator = c;
            owner = c;
            createTime = now;
            ownTime = now;
        }

    function transferProduct(address receiver) public ownerAccess {
        owner = receiver;
        ownTime = now;
    }

    function getData() public view returns (string,string,address,uint,address,uint) {
        return (name,description,owner,ownTime,creator,createTime);
    }
}