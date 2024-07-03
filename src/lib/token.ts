import { ethers } from 'ethers';
import { ERC20__factory } from '../types';

export const getTokenDetails = async (
  provider: ethers.providers.JsonRpcProvider,
  tokenAddress: string
) => {
  const token = ERC20__factory.connect(tokenAddress, provider);

  return {
    address: tokenAddress,
    name: await token.name(),
    symbol: await token.symbol(),
  };
};
