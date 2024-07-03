import { Token } from '@uniswap/sdk-core';
import { Route } from '@uniswap/v2-sdk';
import { logger } from '../common/logger';
import { createPair } from './pair';

export async function getRoute(
  tokenA: Token,
  tokenB: Token
): Promise<Route<Token, Token>> {
  logger.debug('getRoute:: before createPair(): ', new Date());
  const pair = await createPair(tokenA, tokenB);
  logger.debug('getRoute:: after createPair(): ', new Date());

  return new Route([pair], tokenB, tokenA);
}
