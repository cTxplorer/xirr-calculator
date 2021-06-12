export default function FileItem({ name, deleteHandler }) {
  return (
    <div className="flex justify-between items-center text-center border-gray-200 border-2 rounded h-auto w-full text-sm relative px-4 py-2 inline-block mb-2" style={{ wordBreak: 'break-word' }}>
      {name}
      <img
        src="../static/images/close.svg"
        className="rounded cursor-pointer p-1 h-6 hover:bg-gray-100"
        role="button"
        tabIndex="0"
        onClick={deleteHandler}
      />
    </div>
  );
}
