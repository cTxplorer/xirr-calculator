export default function AboutXIRR({ id }) {
  return (
    <div id={id}>
      <h2 className="uppercase font-bold text-xl text-gray-700 mb-8">What is XIRR?</h2>
      <p className="leading-6 mb-4 text-gray-500">
        <strong>Absolute Return</strong> does not consider time-factor in it's formula.
      </p>
      <p className="leading-6 mb-4 text-gray-500">
        <strong>CAGR</strong> consider time, but it is used to calculate point-to-point returns generated for a particular investment (one buy & one sell transaction) and is not useful for more than two transactions.
      </p>
      <p className="leading-6 mb-4 text-gray-500">
        <strong>XIRR</strong> - is an eXteneded version of Internal Rate of Return which can be used to <em>estimate</em> the annualized rate (speed) of return for your portfolio.
      </p>
    </div>
  );
}
