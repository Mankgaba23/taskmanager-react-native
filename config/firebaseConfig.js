import  firebase  from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyDwpdxxEk5j9hqiLpzp3CM_1bXxlBY_O74",
    authDomain: "taskmanager-bd06c.firebaseapp.com",
    projectId: "taskmanager-bd06c",
    storageBucket: "taskmanager-bd06c.appspot.com",
    messagingSenderId: "1044995769398",
    appId: "1:1044995769398:web:0db3f0d64e6c0bfe890497"
};

firebase.initializeApp(firebaseConfig);
export { firebase };