export default function Header() {
  return (
    <header className="fold mt-12" id="calculator">
      {/* just for alignment */}
      <div className="sidebar" aria-hidden />

      <div className="content">
        <h1 className="uppercase font-extrabold text-3xl md:text-4xl">XIRR calculator</h1>
        <p className="text-gray-400 font-medium mb-6">XIRR indicates rate of return on investment with irregular cash flows</p>
      </div>
    </header>
  );
}
