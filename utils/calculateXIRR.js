import { xirr, convertRate, RootFinderMethod } from "node-irr";

export default function calculateXIRR(transformedRows, currentValuation) {
  const cashflow = [
    ...transformedRows,
    {
      amount: currentValuation,
      date: new Date()
    }
  ];

  let rate;
  try {
    rate = xirr(cashflow, {
      fallbackMethod: RootFinderMethod.Bisection,
      method: RootFinderMethod.Newton
    });
    rate = convertRate(rate.rate, "year");
  } catch (err) {
    console.error(err);
  }

  return Math.round(rate * 100);
}