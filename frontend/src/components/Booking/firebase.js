// // firebase.js
// import { initializeApp } from 'firebase/app';
// import 'firebase/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyArSZ1HrISRXxYMDX23GPchwMIzCUx2wsY",
//   authDomain: "spotlessguru-ea64e.firebaseapp.com",
//   databaseURL: "https://spotlessguru-ea64e-default-rtdb.firebaseio.com",
//   projectId: "spotlessguru-ea64e",
//   storageBucket: "spotlessguru-ea64e.appspot.com",
//   messagingSenderId: "506667893385",
//   appId: "1:506667893385:web:f77cf4a229dfe32d0a7c58",
//   measurementId: "G-4ML0NF2VTV"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;
// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyArSZ1HrISRXxYMDX23GPchwMIzCUx2wsY",
  authDomain: "spotlessguru-ea64e.firebaseapp.com",
  databaseURL: "https://spotlessguru-ea64e-default-rtdb.firebaseio.com",
  projectId: "spotlessguru-ea64e",
  storageBucket: "spotlessguru-ea64e.appspot.com",
  messagingSenderId: "506667893385",
  appId: "1:506667893385:web:f77cf4a229dfe32d0a7c58",
  measurementId: "G-4ML0NF2VTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
const db = getDatabase(app);

export { db, app }; // Export both app and db instances
