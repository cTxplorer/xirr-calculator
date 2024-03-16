
const isToday = (someDate) => {
  const today = new Date();
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear();
}

export default function validateTrades(trades, errorMap) {
  // NO TRADE
  if (!trades || trades.length === 0) {
    return errorMap.NO_TRADE_FOUND;
  }

  // NO BUY TRADE
  if (!trades.some(trade => trade.amount < 0)) {
    return errorMap.NO_BUY_TRADE_FOUND;
  }

  // ALL TRADES ON SAME DAY
  if (!trades.filter(trade => !isToday(trade.date)).length) {
    return errorMap.SAME_DAY_TRADES;
  }

  // SELL TRADE BEFORE BUY
  const symbolsWithNonZeroBuy = new Set();
  trades.forEach(trade => {
    if (trade.type.toLowerCase() === 'buy') {
      symbolsWithNonZeroBuy.add(trade.symbol);
    }

    if (trade.type.toLowerCase() === 'sell' && !symbolsWithNonZeroBuy.has(trade.symbol)) {
      console.error(`Found sell as first trade! $${trade.symbol} with SELL on ${trade.date} with no buy trade earlier`)
    }
  })
}
