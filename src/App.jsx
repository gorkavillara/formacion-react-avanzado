import { messaging } from "./firebase/firebase";
import { getToken } from "firebase/messaging";
import './App.css'

const App = () => {
  const obtenToken = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .getRegistration()
        .then((serviceWorkerRegistration) => {
          getToken(messaging, { serviceWorkerRegistration })
            .then(console.log)
            .catch(console.error);
        });
    }
  };

  return (
    <div>
      <h1>My App</h1>
      <button onClick={obtenToken}>Get Token</button>
      {/* <button onClick={() => messaging.subscribeToTopic("news")}>
        Subscribe to News Topic
      </button>
      <button onClick={() => messaging.unsubscribeFromTopic("news")}>
        Unsubscribe from News Topic
      </button> */}
    </div>
  );
};

export default App;
