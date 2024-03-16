// trims duplicate trade entries, in case there is same trade entry present in multiple files
export function trimDuplicates(trades) {
  const set = {};
  trades.forEach((trade) => {
    if (set[`${trade.trade_id}_${trade.trade_date}_${trade.symbol}_${trade.quantity}_${trade.price}`]) {
      console.warn("Removed duplicate trade", JSON.stringify(trade));
    }
    set[`${trade.trade_id}_${trade.trade_date}_${trade.symbol}_${trade.quantity}_${trade.price}`] = trade;
  });
  console.log(Object.keys(set));
  return Object.values(set);
}

// returns an array of object with cashflow amount & date in format required by node-xirr
export function getCashflows(trades) {
  const cashflow = trades.map(trade => ({
    symbol: trade.symbol,
    amount: trade.quantity * trade.price * (trade.trade_type === "buy" ? -1 : 1),
    date: new Date(trade.trade_date),
    type: trade.trade_type,
    isin: trade.isin,
    ...(!Number.isInteger(Number.parseInt(trade.trade_id)) && { trade_id: trade.trade_id})
  }));

  // sort in descending order
  cashflow.sort((a,b) => a.date.getTime() - b.date.getTime());

  return cashflow;
}
