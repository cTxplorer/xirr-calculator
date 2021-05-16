const uniqueColumnKey = 'trade_id';

// trims duplicate trade entries, in case there is same trade entry present in multiple files
export function trimDuplicates(trades) {
  const set = {};
  trades.forEach((trade) => {
    set[trade[uniqueColumnKey]] = trade;
  });
  return Object.values(set);
}

// returns an array of object with cashflow amount & date in format required by node-xirr
export function getCashflows(trades) {
  return trades.map(trade => ({
    amount: trade.quantity * trade.price * (trade.trade_type === "buy" ? -1 : 1),
    date: new Date(trade.trade_date)
  }));
}
