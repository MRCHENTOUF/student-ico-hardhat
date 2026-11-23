import { expect } from "chai";
import { network } from "hardhat";
import { ethers } from "ethers";

describe("StudentICO", function () {

  it("should allow an investor to buy STC tokens", async function () {

    const { ethers: hhEthers } = await network.create();

    const [owner, investor] = await hhEthers.getSigners();

    // Deploy StudentCoin
    const token = await hhEthers.deployContract("StudentCoin");

    // 1 STC = 0.001 ETH
    const tokenPrice = ethers.parseEther("0.001");

    // Deploy ICO
    const ico = await hhEthers.deployContract(
      "StudentICO",
      [
        await token.getAddress(),
        tokenPrice
      ]
    );

    // Send 500,000 STC to the ICO contract
    const icoSupply = ethers.parseUnits("500000", 18);

    await token.transfer(
      await ico.getAddress(),
      icoSupply
    );

    // Investor buys 100 STC
    await ico.connect(investor).buyTokens(
      100,
      {
        value: ethers.parseEther("0.1")
      }
    );

    // Check investor balance
    const investorBalance =
      await token.balanceOf(investor.address);

    expect(investorBalance)
      .to.equal(
        ethers.parseUnits("100", 18)
      );

    // Check tokens sold
    expect(
      await ico.tokensSold()
    ).to.equal(100n);

  });

});