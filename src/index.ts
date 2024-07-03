import { ChainId, Token, WETH9 } from '@uniswap/sdk-core';
import { logger } from './common/logger';
import { getRoute } from './lib/route';

(async function () {
  const DAI = new Token(
    ChainId.MAINNET,
    '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    18
  );
  const WETH = WETH9[ChainId.MAINNET];

  const route = await getRoute(DAI, WETH);

  logger.info(route.midPrice.toSignificant(6));
  logger.info(route.midPrice.invert().toSignificant(6));
})();
