import { ethers } from 'ethers';
import { RPC_PROVIDERS } from './config';

// Get RPC provider
export const getProvider = (params: { chainId: number; rpcUrl?: string }) => {
  const { chainId, rpcUrl } = params;
  const provider = new ethers.providers.JsonRpcProvider(
    rpcUrl ?? RPC_PROVIDERS[chainId]
  );

  return provider;
};
