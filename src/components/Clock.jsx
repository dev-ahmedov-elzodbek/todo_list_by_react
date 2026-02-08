import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const dateStr = now.toLocaleDateString("ru-RU", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeStr = now.toLocaleTimeString("ru-RU");

  return (
    <div className="text-center text-sm text-slate-900 dark:text-slate-100">
      <div className="text-slate-700 dark:text-slate-200/90">{dateStr}</div>
      <div className="font-semibold text-slate-900 dark:text-slate-100">
        {timeStr}
      </div>
    </div>
  );
}
