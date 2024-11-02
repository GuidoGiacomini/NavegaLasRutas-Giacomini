import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
        apiKey: "AIzaSyAJBZVrUOzi41EKbRVTMW5nwECHlfyMqOs",
        authDomain: "wine-store-app-7eac6.firebaseapp.com",
        projectId: "wine-store-app-7eac6",
        storageBucket: "wine-store-app-7eac6.appspot.com",
        messagingSenderId: "1026920868514",
        appId: "1:1026920868514:web:64e26369361de119c3c5fb"
      }

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db