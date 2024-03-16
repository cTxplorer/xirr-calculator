export default function Dropdown({onChange}) {
  return (
    <div class="relative inline-block text-left">
        <select
          class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onChange={onChange}
        >
          <option value="">
            Select year

          </option>
          {new Array(new Date().getFullYear() - 2010 + 1).fill(0).map((_, i) => (
            <option
              value={new Date().getFullYear() - i}
              class="text-gray-700 block px-4 py-2 text-sm"
            >
              {new Date().getFullYear() - i}
            </option>
          ))}
        </select>
    </div>
  );
}
