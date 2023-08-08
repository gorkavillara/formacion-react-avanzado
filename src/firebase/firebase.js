import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDsfKoV7TtsVTK9KKvO7KuF3RbP5B54PtE",
  authDomain: "fir-api-a3355.firebaseapp.com",
  projectId: "fir-api-a3355",
  storageBucket: "fir-api-a3355.appspot.com",
  messagingSenderId: "1011386254365",
  appId: "1:1011386254365:web:217330c56750a7f3d732f4",
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BF6n7pDMoVrpO0d45bgYr9kZPaSt8OwE9evchUqsAJKgiEWroqFkbIwUeNJb7llfNFLuHWeBjCgt5C3AHQwB-Ro",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
