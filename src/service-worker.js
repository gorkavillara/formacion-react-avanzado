import { onBackgroundMessage, getMessaging } from "firebase/messaging/sw";

const messaging = getMessaging();

onBackgroundMessage(messaging, (payload) => {
  console.log(
    "Recibido mensaje en background ",
    payload
  );
  // // Customize notification here
  // const notificationTitle = "Background Message Title";
  // const notificationOptions = {
  //   body: "Background Message body.",
  //   icon: "/firebase-logo.png",
  // };

  // self.registration.showNotification(notificationTitle, notificationOptions);
});

// self.addEventListener("fetch", e => console.log(e))

// const event: keyof ServiceWorkerContainerEventMap = "message"

// self.addEventListener("push", () => {
//     console.log("push event")

//     self.registration.showNotification("Título", "Cuerpo del mensaje")
//     // Notification.requestPermission().then((permission) => {
//     //     if (permission !== "granted") return

//     //     const notification = new Notification("Título", {
//     //         body: "Cuerpo del mensaje"
//     //     })

//     //     console.log(notification)
//     // })
// })
