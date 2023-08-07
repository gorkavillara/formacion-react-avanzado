import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDsfKoV7TtsVTK9KKvO7KuF3RbP5B54PtE",
  authDomain: "fir-api-a3355.firebaseapp.com",
  projectId: "fir-api-a3355",
  storageBucket: "fir-api-a3355.appspot.com",
  messagingSenderId: "1011386254365",
  appId: "1:1011386254365:web:217330c56750a7f3d732f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

// const vapidKey =
//   "BF6n7pDMoVrpO0d45bgYr9kZPaSt8OwE9evchUqsAJKgiEWroqFkbIwUeNJb7llfNFLuHWeBjCgt5C3AHQwB-Ro";

// getToken(messaging, {
//   vapidKey,
//   serviceWorkerRegistration: "service-worker.js",
// })
//   .then(console.log)
//   .catch(console.error);

export default app;
