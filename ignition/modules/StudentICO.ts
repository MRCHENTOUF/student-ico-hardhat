import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("StudentICOModule", (m) => {

  // 1 STC = 0.001 ETH
  const tokenPrice = 1_000_000_000_000_000n;

  // Deploy StudentCoin
  const token = m.contract("StudentCoin");

  // Deploy StudentICO
  const ico = m.contract(
    "StudentICO",
    [token, tokenPrice]
  );

  // 500,000 STC for the ICO
  const icoSupply = 500_000n * 10n ** 18n;

  // Transfer ICO supply to StudentICO
  m.call(
    token,
    "transfer",
    [ico, icoSupply]
  );

  return { token, ico };
});