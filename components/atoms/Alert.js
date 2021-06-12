export default function Alert({ visible, success, children }) {
  return (
    <div className={`${visible ? 'max-h-full' : 'hidden max-h-0'} text-white px-6 py-4 border-0 rounded relative mb-4 ${success ? 'bg-green-500' : 'bg-red-400'}`}>
      <span className="inline-block align-middle mr-8">
        {children}
      </span>
    </div>
  );
}
