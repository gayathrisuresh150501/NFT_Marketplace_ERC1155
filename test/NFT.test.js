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

        it("NFT is minted successfully", async function() {
           
            expect(await hardhatToken.balanceOf(owner.address, 0)).to.equal(10);
            expect(await hardhatToken.balanceOf(owner.address, 1)).to.equal(200);
            expect(await hardhatToken.balanceOf(owner.address, 2)).to.equal(30);
            expect(await hardhatToken.balanceOf(owner.address, 3)).to.equal(100);
            expect(await hardhatToken.balanceOf(owner.address, 4)).to.equal(10);
            expect(await hardhatToken.balanceOf(owner.address, 5)).to.equal(100);
            expect(await hardhatToken.balanceOf(owner.address, 6)).to.equal(10);
            expect(await hardhatToken.balanceOf(owner.address, 7)).to.equal(30);
            expect(await hardhatToken.balanceOf(owner.address, 8)).to.equal(200);
            expect(await hardhatToken.balanceOf(owner.address, 9)).to.equal(100);
            expect(await hardhatToken.balanceOf(owner.address, 10)).to.equal(100);

        });

        it("Token URI is set sucessfully", async function() {
        
            expect(await hardhatToken.uri(0)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/0.json");
            expect(await hardhatToken.uri(1)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/1.json");
            expect(await hardhatToken.uri(2)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/2.json");
            expect(await hardhatToken.uri(3)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/3.json");
            expect(await hardhatToken.uri(4)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/4.json");
            expect(await hardhatToken.uri(5)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/5.json");
            expect(await hardhatToken.uri(6)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/6.json");
            expect(await hardhatToken.uri(7)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/7.json");
            expect(await hardhatToken.uri(8)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/8.json");
            expect(await hardhatToken.uri(9)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/9.json");
            expect(await hardhatToken.uri(10)).to.equal("https://ipfs.io/ipfs/QmWYUfRyoCGZtG9Ken97VSRrT8G9YUs4xbufJwoDNmaSfx/10.json");

        })

    });

   
});
