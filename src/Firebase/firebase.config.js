import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBLHwsfISbvRO9ZPUlJTj4SCutHqKwC_HU",
    authDomain: "bistro-boss-8ae15.firebaseapp.com",
    projectId: "bistro-boss-8ae15",
    storageBucket: "bistro-boss-8ae15.appspot.com",
    messagingSenderId: "196012157679",
    appId: "1:196012157679:web:0423638f08e7fe30e1c91a"
};

const app = initializeApp(firebaseConfig);

export default app;