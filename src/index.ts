import { ChainId, Token, WETH9 } from '@uniswap/sdk-core';
import { logger } from './common/logger';
import { getRoute } from './lib/route';

(async function () {
  /* const DAI = new Token(
    ChainId.MAINNET,
    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    18,
    'DAI',
    'Dai Stablecoin'
  );
  const WETH = WETH9[ChainId.MAINNET]; */

  // random coins
  // created 15hrs ago
  /* const NAV = new Token(
    ChainId.MAINNET,
    '0x1Ae38Aa04C482C7507c5Ec6CEF7149A1D29109Ec',
    18,
    'NAV',
    'Navaix'
  );
  const WETH = WETH9[NAV.chainId]; */

  /* // created 5hrs ago
  const SPF = new Token(
    ChainId.OPTIMISM,
    '0x57ae2388b2abdc26f43364a2e320973ba47271b4',
    18,
    'SPF',
    'SPF'
  );
  const WETH = WETH9[SPF.chainId]; */

  // created 23s ago
  const goal = new Token(
    ChainId.BASE,
    '0x54A25F75d752a43b1E530C1793F0dfd54BC568F3',
    18,
    'goal',
    'goal'
  );
  const WETH = WETH9[goal.chainId];

  const fromToken = WETH;
  const toToken = goal;

  logger.debug('main:: before getRoute(): ', new Date());
  const route = await getRoute(toToken, fromToken);
  logger.debug('main:: after getRoute(): ', new Date());

  logger.info('fromToken', {
    name: fromToken.name,
    address: fromToken.address,
  });
  logger.info('toToken', { name: toToken.name, address: toToken.address });
  logger.info('midPrice from → to', route.midPrice.toSignificant(6));
  logger.info('midPrice to → from', route.midPrice.invert().toSignificant(6));
})();
