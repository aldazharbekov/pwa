// /lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDyr_N9CxZiTRiwgeRBEdf3u7HOIpCZuG0",
  authDomain: "pwa-push-demo-b8934.firebaseapp.com",
  projectId: "pwa-push-demo-b8934",
  messagingSenderId: "544410900488",
  appId: "1:544410900488:web:6415f566671199127c19bd",
};

let messaging: ReturnType<typeof getMessaging> | null = null;

function getMessagingInstance() {
  if (typeof window === "undefined") return null;
  if (!messaging) {
    const app = initializeApp(firebaseConfig);
    messaging = getMessaging(app);
  }
  return messaging;
}

export const requestFirebaseNotificationPermission = async () => {
  const messagingInstance = getMessagingInstance();
  if (!messagingInstance) return null;
  try {
    const token = await getToken(messagingInstance, {
      vapidKey:
        "BCmXsMau2q1XosPJfnaHOPT-zzg6Yp0X5D1FL3UzjHK9FQNQnij1pCAsCc29oOdssIcTq__HqA-js2z15j5g21A",
    });
    return token;
  } catch (err) {
    console.error("Ошибка получения токена:", err);
    return null;
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    const messagingInstance = getMessagingInstance();
    if (!messagingInstance) return;
    onMessage(messagingInstance, (payload) => {
      resolve(payload);
    });
  });
