"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          setTimeout(() => {
            new Notification("Hello, world!", {
              body: "Прошло 5 секунд",
              icon: "/icon-128.png",
            });
          }, 5000);
        }
      });
    }
  }, []);

  const handleClick = () => {
    alert("Push notification!");
  };

  return (
    <main className="flex flex-col items-center justify-center p-10">
      <h1>PWA приложение</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={handleClick}
      >
        Нажми меня
      </button>
    </main>
  );
}
