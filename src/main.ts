import dotenv from "dotenv";
import { ethers } from "ethers";
import ERC20_ABI from "./erc20.json";

const SX_TORONTO_ROUTER_CONTRACT = "0x77cA62F431241e4D3329a5FD74eD986Aaa60dc20";
// const SX_TORONTO_USDC_CONTRACT = "0x5BF1AF5Fe99ed37450499719413C13C3140f55Fd";

dotenv.config();

function getRPCProvider() {
  return new ethers.providers.StaticJsonRpcProvider(process.env.SX_TORONTO_RPC);
}

async function testEthGasEstimate() {
  const provider = getRPCProvider();
  const erc20 = new ethers.Contract(
    SX_TORONTO_ROUTER_CONTRACT,
    ERC20_ABI.abi,
    provider
  );

  const estimation = await erc20.estimateGas.decimals();
  console.log(estimation);
}

testEthGasEstimate()
  .then(() => {})
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
