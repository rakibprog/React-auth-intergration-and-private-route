import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initiliazeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initiliazeAuthentication;