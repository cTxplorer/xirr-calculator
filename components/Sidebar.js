export default function Sidebar() {
  const items = [
    { name: 'Zerodha Tradebook', href: 'calculator' },
    { name: 'Online Calculator', href: 'help' },
    { name: 'What is XIRR?', href: 'xirr' },
    { name: 'Contribute', href: 'contribute' },
  ]
  return (
    <nav className="sidebar pr-8 text-right text-gray-400 font-medium">
      <ul className="sticky top-6 flex flex-col pr-6 border-r border-solid border-gray-400">
        {
          items.map(item => (
            <li className="mb-4" key={item.href}>
              <a href={`#${ item.href }`} className="px-3 py-2 rounded-full hover:bg-gray-100">
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
      <div
        className="sticky text-xs pr-6"
        style={{ top: "calc(100% - 64px)" }}
      >
        All your trades data is processed within the browser.
      </div>
    </nav>
  );
}


