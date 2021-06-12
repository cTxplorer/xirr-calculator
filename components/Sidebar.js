export default function Sidebar() {
  const items = [
    { name: 'Calculator', href: 'calculator' },
    { name: 'What is XIRR?', href: 'xirr' },
    { name: 'Help', href: 'help' },
    { name: 'Contribute', href: 'contribute' },
  ]
  return (
    <nav className="sidebar pr-8 text-right text-gray-400 font-medium">
      <ul className="sticky top-6 flex flex-col pr-6 border-r border-solid border-gray-400">
        {
          items.map(item => (
            <li className="mb-4" key={item.href}>
              <a href={`#${item.href}`} className="px-3 py-2 rounded-full hover:bg-gray-100">
                {item.name}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}


