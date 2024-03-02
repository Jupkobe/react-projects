export default function Note({ title, content, deleteNote }) {
  return (
    <div className="w-full h-[16.2rem] bg-orange-100 shadow-sm shadow-gray-400">
      <div className="flex justify-between mx-4 mt-4">
        <h1 className="text-2xl font-semibold whitespace-nowrap">{title}</h1>
        <button onClick={deleteNote}>✖</button>
      </div>
      <div className="px-4 h-3/4">
        <p className="h-full overflow-hidden whitespace-pre-wrap text-ellipsis">
          {content}
        </p>
      </div>
    </div>
  );
}
