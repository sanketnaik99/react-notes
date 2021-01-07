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
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
  getFirebase,
} from "react-redux-firebase";
import {
  createFirestoreInstance,
  firestoreReducer,
  getFirestore,
} from "redux-firestore";
import thunk from "redux-thunk";

const rrfConfig = {
  attachAuthIsReady: true,
  userProfile: "users",
  useFirestoreForProfile: true,
};

const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const firebaseConfig = {
  apiKey: "AIzaSyBJ6CxcKqXdy4jygL068xm7Q0HSz9msstU",
  authDomain: "react-redux-c7b56.firebaseapp.com",
  projectId: "react-redux-c7b56",
  storageBucket: "react-redux-c7b56.appspot.com",
  messagingSenderId: "948241043047",
  appId: "1:948241043047:web:473e3e5cf561d5def40ec2",
  measurementId: "G-ENY3GD61C7",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
  demo: demoReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
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
