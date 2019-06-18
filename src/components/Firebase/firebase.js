import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const config = {
 apiKey: "AIzaSyDLLczzFbLpoSV2uLIwqIT4LfOusz95mpI",
 authDomain: "tao-firebase.firebaseapp.com",
 databaseURL: "https://tao-firebase.firebaseio.com",
 projectId: "tao-firebase",
 storageBucket: "tao-firebase.appspot.com",
 messagingSenderId: "101523633039",
}

class Firebase {
 constructor() {
  app.initializeApp(config);

  this.auth = app.auth();
  this.db = app.database();
 }
 //***Auth API*** 
 doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);
 doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);
 doSignOut = () => this.auth.signOut();
 doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 doPasswordUpdate = password => this.auth.updatePassword(password);
 // *** User API ***
 user = uid => this.db.ref(`users/${uid}`);
 users = () => this.db.ref('users');
}

export default Firebase;