import { trimDuplicates, getCashflows } from './zerodha';

export default {
  zerodha: (trades) => {
    return [trimDuplicates, getCashflows].reduce(
      (transformedTrades, cb) => cb(transformedTrades),
      trades,
    );
  },
};
