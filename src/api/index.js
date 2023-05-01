import  {   getFirestore,collection , getDocs }from "firebase/firestore/lite"
import {initializeApp  ,getApp  ,getApps } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAANlOOuJ1fiOYlJO5WQgPTRKVkb_LsOjM",
    authDomain: "wk10hw-a78e8.firebaseapp.com",
    projectId: "wk10hw-a78e8",
    storageBucket: "wk10hw-a78e8.appspot.com",
    messagingSenderId: "486525243682",
    appId: "1:486525243682:web:a2ad5f7c885ffad078557b",
    measurementId: "G-W7478RC4K1"
  };

  const app_length=getApps().length>0;

  const app = app_length ? getApp():initializeApp(firebaseConfig);

  const DBBBBBB = getFirestore(app);
  const productsCollection= collection(DBBBBBB , "image");

  export const getProducts=async()=>{
    const querySnapshot = await getDocs(productsCollection);
    let result = [];
    querySnapshot.forEach(async(product)=>{
        await result.push(product.data());
    });
    return result;
  };