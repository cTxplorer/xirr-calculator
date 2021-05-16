export default function Header() {
  return (
    <header className="fold mt-12">
    {/* just for alignment */}
    <div className="sidebar" aria-hidden></div>

    <div className="content">
      <h1 className="uppercase font-extrabold text-3xl md:text-4xl">XIRR calculator</h1>
      <h2 className="text-gray-400 font-medium mb-6">eXtended Internal Rate of Return</h2>
    </div>
  </header>
  );
}
