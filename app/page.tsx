"use client";
import {
  onMessageListener,
  requestFirebaseNotificationPermission,
} from "@/lib/firebase";
import type { MessagePayload } from "firebase/messaging";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    requestFirebaseNotificationPermission().then((token) => {
      if (token) {
        console.log("FCM token:", token);
        // Отправь на свой сервер, если нужно
      }
    });

    onMessageListener().then((payload) => {
      if (typeof window !== "undefined" && "Notification" in window) {
        const notification = (payload as MessagePayload)?.notification || {};
        const title = notification.title ?? "Уведомление";
        const body = notification.body ?? "";
        new Notification(title, {
          body,
          icon: "/icon-128.png",
        });
      }
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-10">
      <h1>Пуш уведомления через Firebase</h1>
    </main>
  );
}
