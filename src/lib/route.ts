import { Token } from '@uniswap/sdk-core';
import { Route } from '@uniswap/v2-sdk';
import { logger } from '../common/logger';
import { createPair } from './pair';

export async function getRoute(
  toToken: Token,
  fromToken: Token
): Promise<Route<Token, Token>> {
  logger.debug('getRoute:: before createPair(): ', new Date());
  const pair = await createPair(toToken, fromToken);
  logger.debug('getRoute:: after createPair(): ', new Date());

  return new Route([pair], fromToken, toToken);
}
