import firebase from "./firebaseApp";
import { getDatabase } from "firebase/database";

const db = getDatabase(firebase);

export default db;