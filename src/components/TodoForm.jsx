import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  return (
    <div className="flex w-full items-center gap-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="new todo"
        className="w-full rounded-full bg-white px-4 py-2 text-sm text-slate-900 outline-none ring-2 ring-transparent focus:ring-indigo-400"
      />
      <button
        onClick={() => {
          onAdd(value);
          setValue("");
        }}
        className="grid h-9 w-9 place-items-center rounded-full bg-indigo-500 text-white shadow hover:bg-indigo-400 active:bg-indigo-600"
        aria-label="add"
        title="Add"
      >
        +
      </button>
    </div>
  );
}
