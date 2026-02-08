import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import TodoForm from "./TodoForm.jsx";
import TodoItem from "./TodoItem.jsx";

const LS_KEY = "todos_list";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
      setTodos(saved);
    } catch {
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }, [todos]);

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter((t) => t.done).length;
    return { total, done };
  }, [todos]);

  function addTodo(text) {
    const value = text.trim();
    if (!value) return toast.error("Matn kiriting!");

    const item = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      text: value,
      done: false,
    };

    setTodos((prev) => [item, ...prev]);
    toast.success("Todo qo‘shildi");
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    toast("Todo o‘chirildi");
  }

  function clearDone() {
    const before = todos.length;
    const after = todos.filter((t) => !t.done).length;
    setTodos((prev) => prev.filter((t) => !t.done));
    toast.success(`Bajarilganlar tozalandi: ${before - after} ta`);
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3">
        <TodoForm onAdd={addTodo} />
        <button
          onClick={clearDone}
          className="rounded-xl bg-red-600 px-3 py-2 text-sm text-slate-100 ring-1 ring-white/10 hover:bg-slate-700"
        >
          Clear done
        </button>
      </div>

      <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        Jami: {stats.total} • Bajarilgan: {stats.done}
      </div>

      <div className="mt-4 space-y-2">
        {todos.length === 0 ? (
          <div className="rounded-xl bg-slate-800/40 p-4 text-sm text-slate-200/80 ring-1 ring-white/10">
            Hali todo yo‘q. “Yangi todo” yozib + bosing.
          </div>
        ) : (
          todos.map((t) => (
            <TodoItem
              key={t.id}
              todo={t}
              onToggle={() => toggleTodo(t.id)}
              onRemove={() => removeTodo(t.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
