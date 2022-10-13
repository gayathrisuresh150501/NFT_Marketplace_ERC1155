const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Marketplace Contract ERC1155", function()
{
    let Token;
    let hardhatToken;

    beforeEach(async () =>
    {
        Token = await ethers.getContractFactory("NFT");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        hardhatToken =  await Token.deploy();
    });

    describe("Deployment", function()
    {

        it("Greeter Message", async function() 
        {
            expect(await hardhatToken.testcase1()).to.equal("Heyy");
       
        });

        it("Checks the existence of NFT with the given ID", async function()
        {
            expect(await hardhatToken.AVOCADO()).to.equal(0);
            expect(await hardhatToken.BIRDCAGE()).to.equal(1);
            expect(await hardhatToken.BUTTERFLY()).to.equal(2);
            expect(await hardhatToken.DURGA()).to.equal(3);
            expect(await hardhatToken.EVENINGSKY()).to.equal(4);
            expect(await hardhatToken.GIRL()).to.equal(5);
            expect(await hardhatToken.GIRLMOON()).to.equal(6);
            expect(await hardhatToken.KRISHNA()).to.equal(7);
            expect(await hardhatToken.MORNINGSKY()).to.equal(8);
            expect(await hardhatToken.NEZUKO()).to.equal(9);
            expect(await hardhatToken.PEACOCK()).to.equal(10);
        });

    });

   
});