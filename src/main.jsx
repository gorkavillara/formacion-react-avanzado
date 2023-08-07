import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./firebase/firebase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       new Notification("Título", {
//         body: "Esto es el cuerpo de la notificaión"
//       })
//       console.log("Notification permission granted.");
//     }
//   });
// }

// requestPermission();

// if ("navigator" in window) {
//   navigator.serviceWorker.register("service-worker.js")
// }
