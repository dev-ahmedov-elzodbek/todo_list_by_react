import { useEffect, useMemo, useState } from "react";
import { Toaster, toast } from "sonner";
import Clock from "./components/Clock.jsx";
import TodoApp from "./components/TodoApp.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark");

  // DARK CLASS TO‘G‘RI BOSHQARILADI
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const themeLabel = useMemo(
    () => (theme === "dark" ? "Light mode" : "Dark mode"),
    [theme]
  );

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Toaster richColors position="top-right" />

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-200/40 via-transparent to-slate-100/70 dark:from-slate-900/30 dark:to-slate-950/70" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center px-4 pt-10">
        <Clock />

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-indigo-600 dark:text-indigo-300">
          todo ro'yxati
        </h1>

        <button
          onClick={() => {
            setTheme((t) => (t === "dark" ? "light" : "dark"));
            toast.success("Rejim o‘zgardi");
          }}
          className="mt-4 rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-slate-900 shadow hover:brightness-95 active:brightness-90"
        >
          {themeLabel}
        </button>

        <div className="mt-6 w-full rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/40 dark:ring-white/10">
          <TodoApp />
        </div>

        <p className="mt-6 text-sm text-slate-600 dark:text-slate-300/80">
          todo qo‘shing 👇
        </p>
      </div>
    </div>
  );
}
