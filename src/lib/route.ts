import { Token } from '@uniswap/sdk-core';
import { Route } from '@uniswap/v2-sdk';
import { createPair } from './pair';

export async function getRoute(
  tokenA: Token,
  tokenB: Token
): Promise<Route<Token, Token>> {
  const pair = await createPair(tokenA, tokenB);

  return new Route([pair], tokenB, tokenA);
}
