import "firebase/firestore";
import { Alert } from "react-native";
import { firebase } from './config/firebaseConfig'
require('firebase/auth')

export async function registration(email, password, lastName, firstName) {

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        db.collection("users")
            .doc(currentUser.uid)
            .set({
                email: currentUser.email,
                lastName: lastName,
                firstName: firstName,
            });
    } catch (err) {
        Alert.alert("There is something wrong!!!", err.massege);
        console.log(err.massege);
    }
    console.log(firstName,lastName,password,email)
}
export async function signIn(email, password) {
    try {
        await firebase
            .auth()
            .SigninWithEmailAndPassword(email, password);
    } catch (err) {
        Alert.alert('there is something wrong', err.massege);
        console.log(err.massege);
    }
}
export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (err) {
        Alert.auth('there is something wrong!!', err.massege);
    }
}
export async function addTasks(task) {
    try {
        const currentUser = firebase.auth().currentUser;
        const db = firebase.firestore();
        db.collection("tasks")
            .add({
                userID: currentUser.uid,
                task: task
            });
    } catch (error) {
        console.log(error);
    }
}

export async function getTasks() {
    let dataObj = []
    try {
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser.uid);
        //const db =firebase.firestore()  
        let doc = await firebase
            .firestore()
            .collection("tasks")
            .where("userID", "==", currentUser?.uid)
            .get()

        if (doc) {
            doc.forEach((docs) => {
                dataObj.push({ ...docs.data() })
            })
        } else {
            console.log("no record");
        }
    } catch (error) {
        console.log(error);
    }
    console.log(dataObj);
    return dataObj
}

export async function getUserDetails() {

}

export async function signInWithGoogle() {

}

export async function resertPassword(email) {
    try {


        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                console.log("password resert email sent!")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    } catch (error) {
        console.log(error.massege)
    }
}