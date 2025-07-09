/* eslint-disable no-undef */
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDyr_N9CxZiTRiwgeRBEdf3u7HOIpCZuG0",
  authDomain: "pwa-push-demo-b8934.firebaseapp.com",
  projectId: "pwa-push-demo-b8934",
  messagingSenderId: "544410900488",
  appId: "1:544410900488:web:6415f566671199127c19bd",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Background message received:', payload); // ← добавь

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-128.png",
  });
});
