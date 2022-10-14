//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC1155, Ownable
{
    string public testcase1 = "Heyy";
    uint public constant AVOCADO = 0;
    uint public constant BIRDCAGE = 1;
    uint public constant BUTTERFLY = 2;
    uint public constant DURGA = 3;
    uint public constant EVENINGSKY = 4;
    uint public constant GIRL = 5;
    uint public constant GIRLMOON = 6;
    uint public constant KRISHNA = 7;
    uint public constant MORNINGSKY = 8;
    uint public constant NEZUKO = 9;
    uint public constant PEACOCK = 10;
    

    constructor() ERC1155("https://ipfs.io/ipfs/QmVw7s31V6NZa3pmVppwiefx76ZLp1Hj2FojHLtc4dWUcV")
    {
        _mint(msg.sender, AVOCADO, 10, "");
        _mint(msg.sender, BIRDCAGE, 200, "");
        _mint(msg.sender, BUTTERFLY, 30, "");
        _mint(msg.sender, DURGA, 100, "");
        _mint(msg.sender, EVENINGSKY, 10, "");
        _mint(msg.sender, GIRL, 100, "");
        _mint(msg.sender, GIRLMOON, 10, "");
        _mint(msg.sender, KRISHNA, 30, "");
        _mint(msg.sender, MORNINGSKY, 200, "");
        _mint(msg.sender, NEZUKO, 100, "");
        _mint(msg.sender, PEACOCK, 100, "");
    }

    function uri(uint _tokenId) override public view returns (string memory)
    {
        return string(
            abi.encodePacked("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/",
            Strings.toString(_tokenId),".json")
        );

    }

    function mint(address account, uint id, uint amount) public onlyOwner
    {
        _mint(account, id, amount, "");
    }

    function burn(address account, uint id, uint amount) public returns(uint)
    {
        require(msg.sender == account);
        _burn(account, id, amount);
        return balanceOf(account, id);

    }

    function _balanceOf(address _account, uint _id) public view returns(uint)
    {
        return balanceOf(_account, _id);
    }

     function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }
    
   
}
