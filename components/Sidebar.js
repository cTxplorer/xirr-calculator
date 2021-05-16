export default function Sidebar() {
  return (
    <nav className="sidebar pr-8 text-right text-gray-400 font-medium">
      <ul className="sticky top-6 flex flex-col pr-6 border-r border-solid border-gray-400">
        <li className="mb-2">
          <a href="#calculator">Calculator</a>
        </li>
        <li className="mb-2">
          <a href="#about">WTH is XIRR!</a>
        </li>
        {/* <li className="mb-2">
          <a href="#faq">FAQ</a>
        </li> */}
        <li className="mb-2">
          <a href="#contribute">Contribute</a>
        </li>
        <li className="mb-2">
          <a href="#about-us">About</a>
        </li>
      </ul>
    </nav>
  );
}


