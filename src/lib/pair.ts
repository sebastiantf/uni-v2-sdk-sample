import { CurrencyAmount, Token } from '@uniswap/sdk-core';
import { Pair } from '@uniswap/v2-sdk';
import { getProvider } from '../common/utils';
import { UniswapV2Pair__factory } from '../types';

export async function createPair(tokenA: Token, tokenB: Token): Promise<Pair> {
  const pairAddress = Pair.getAddress(tokenA, tokenB);

  const provider = getProvider({ chainId: tokenA.chainId });

  const pairContract = UniswapV2Pair__factory.connect(pairAddress, provider);
  const reserves = await pairContract.getReserves();
  const [reserve0, reserve1] = reserves;

  const tokens = [tokenA, tokenB];
  const [token0, token1] = tokens[0].sortsBefore(tokens[1])
    ? tokens
    : [tokens[1], tokens[0]];

  const pair = new Pair(
    CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
    CurrencyAmount.fromRawAmount(token1, reserve1.toString())
  );
  return pair;
}
