import { ethers } from 'ethers';
import { logger } from './common/logger';
import { config } from './common/config';
import { getTokenDetails } from './lib/token';

(async function () {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const signer = new ethers.Wallet(config.privateKey, provider);

  const tokenAddress = '0xe8B3dFEE339ce4954A7300E8d421A4BA2F51e7b0';
  const tokenDetails = await getTokenDetails(provider, tokenAddress);

  logger.info('Token: ', tokenDetails);
})();
