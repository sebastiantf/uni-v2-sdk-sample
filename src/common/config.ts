import dotenv from 'dotenv';
import { logger } from './logger';
dotenv.config();

export const config = {
  rpcUrl: process.env.RPC_URL ?? '',
  privateKey: process.env.PRIVATE_KEY ?? '',
};

logger.info('config: ', config);

export enum CHAIN_IDS {
  ANVIL_CHAIN_ID = 31337,
  ETHEREUM_CHAIN_ID = 1,
  OPTIMISM_CHAIN_ID = 10,
  BNB_CHAIN_ID = 56,
  GNOSIS_CHAIN_ID = 100,
  POLYGON_CHAIN_ID = 137,
  FANTOM_CHAIN_ID = 250,
  ZKSYNC_CHAIN_ID = 324,
  POLYGON_ZKEVM_CHAIN_ID = 1101,
  BASE_CHAIN_ID = 8453,
  ZORA_CHAIN_ID = 7777777,
  ARBITRUM_CHAIN_ID = 42161,
  AVALANCHE_CHAIN_ID = 43114,
  AURORA_CHAIN_ID = 1313161554,
}

export const RPC_PROVIDERS: Record<number, string> = {
  [CHAIN_IDS.ANVIL_CHAIN_ID]: 'http://localhost:8545',

  [CHAIN_IDS.ETHEREUM_CHAIN_ID]:
    process.env.ETHEREUM_RPC ?? 'https://rpc.ankr.com/eth',

  [CHAIN_IDS.OPTIMISM_CHAIN_ID]:
    process.env.OPTIMISM_RPC ?? 'https://rpc.ankr.com/optimism',

  [CHAIN_IDS.BNB_CHAIN_ID]: process.env.BNB_RPC ?? 'https://rpc.ankr.com/bsc',

  [CHAIN_IDS.GNOSIS_CHAIN_ID]:
    process.env.GNOSIS_RPC ?? 'https://rpc.ankr.com/gnosis',

  [CHAIN_IDS.POLYGON_CHAIN_ID]:
    process.env.POLYGON_RPC ?? 'https://rpc.ankr.com/polygon',

  [CHAIN_IDS.FANTOM_CHAIN_ID]:
    process.env.FANTOM_RPC ?? 'https://rpc.ankr.com/fantom',

  [CHAIN_IDS.ZKSYNC_CHAIN_ID]:
    process.env.ZKSYNC_RPC ?? 'https://mainnet.era.zksync.io',

  [CHAIN_IDS.POLYGON_ZKEVM_CHAIN_ID]:
    process.env.POLYGON_ZKEVM_RPC ?? 'https://rpc.ankr.com/polygon_zkevm',

  [CHAIN_IDS.BASE_CHAIN_ID]:
    // process.env.BASE_RPC ?? 'https://base.llamarpc.com',
    process.env.BASE_RPC ?? 'https://rpc.ankr.com/base',

  [CHAIN_IDS.ZORA_CHAIN_ID]: process.env.ZORA_RPC ?? 'https://rpc.zora.energy',

  [CHAIN_IDS.ARBITRUM_CHAIN_ID]:
    process.env.ARBITRUM_RPC ?? 'https://rpc.ankr.com/arbitrum',

  [CHAIN_IDS.AVALANCHE_CHAIN_ID]:
    process.env.AVALANCHE_RPC ?? 'https://rpc.ankr.com/avalanche',

  [CHAIN_IDS.AURORA_CHAIN_ID]:
    process.env.AURORA_RPC ?? 'https://1rpc.io/aurora',
};
