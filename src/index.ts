import { ChainId, Token, WETH9 } from '@uniswap/sdk-core';
import { logger } from './common/logger';
import { getRoute } from './lib/route';

(async function () {
  const DAI = new Token(
    ChainId.MAINNET,
    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    18,
    'DAI',
    'Dai Stablecoin'
  );
  const WETH = WETH9[ChainId.MAINNET];

  const fromToken = WETH;
  const toToken = DAI;

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
