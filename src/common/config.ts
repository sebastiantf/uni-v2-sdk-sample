import dotenv from 'dotenv';
import { logger } from './logger';
dotenv.config();

export const config = {
  rpcUrl: process.env.RPC_URL ?? '',
  privateKey: process.env.PRIVATE_KEY ?? '',
};

logger.info('config: ', config);
