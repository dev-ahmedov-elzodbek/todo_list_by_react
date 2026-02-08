export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div className="
      flex items-center justify-between gap-3 rounded-xl p-3 ring-1
      bg-white text-slate-900 ring-slate-200
      dark:bg-slate-800/40 dark:text-slate-100 dark:ring-white/10
    ">
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={onToggle}
          className="h-4 w-4 accent-indigo-500"
        />
        <span
          className={
            todo.done
              ? "line-through text-slate-500 dark:text-slate-400"
              : "text-slate-900 dark:text-slate-100"
          }
        >
          {todo.text}
        </span>
      </label>

      <button
        onClick={onRemove}
        className="
          rounded-lg px-3 py-1 text-xs font-medium
          bg-red-100 text-red-600 hover:bg-red-200
          dark:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/30
        "
      >
        Delete
      </button>
    </div>
  );
}
