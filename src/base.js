import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDOC2_ofayUc-oLWxB9UncN8N9kG0OcR58",
    authDomain: "recipebox-5c5c5.firebaseapp.com",
    databaseURL: "https://recipebox-5c5c5.firebaseio.com",
};

const app = firebase.initializeApp(config);

const base = Rebase.createClass(app.database());

export {base};
