import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, combineReducers, createStore } from "redux";
import demoReducer from "./store/reducers/demoNotesReducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
  getFirebase,
} from "react-redux-firebase";
import {
  createFirestoreInstance,
  firestoreReducer,
  getFirestore,
  reduxFirestore,
} from "redux-firestore";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/authReducer";
import userNotesReducer from "./store/reducers/userNotesReducer";

const rrfConfig = {
  attachAuthIsReady: true,
  userProfile: "users",
  useFirestoreForProfile: true,
};

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
  demo: demoReducer,
  auth: authReducer,
  userNotes: userNotesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares), reduxFirestore(firebase))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
