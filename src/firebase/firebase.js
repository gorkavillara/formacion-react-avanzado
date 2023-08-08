import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAttg-YqQmIYsDQDbgGUCTLzwGbc5kVqPQ",
  authDomain: "firenotifications-8e73f.firebaseapp.com",
  projectId: "firenotifications-8e73f",
  storageBucket: "firenotifications-8e73f.appspot.com",
  messagingSenderId: "493872124595",
  appId: "1:493872124595:web:a1933d80f8ae7bd29f96c6"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      const vapidKey = "BE1UdF6PA3Tl3rIm6sVLPhQftY07OS-jZ6w6O3DZbaUU3-Ei8vtlE05_Sf1m3JEM3dXXq9ZzlB9zLe-PqBDRf24"
      getToken(messaging, { vapidKey })
        .then((currentToken) => {
          if (currentToken) {
            console.log("currentToken: ", currentToken);
          } else {
            console.log("Could not get token");
          }
        });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
