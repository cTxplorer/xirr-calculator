
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
}
