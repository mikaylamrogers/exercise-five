import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

//Styles
import './App.css';

// Pages
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import UserProfile from './containers/UserProfile';

// Components
import Header from './components/Header';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY, // Repalce with .env file API reference
  authDomain: "exercise-five-91f00.firebaseapp.com",
  databaseURL: "https://exercise-five-91f00.firebaseio.com",
  projectId: "exercise-five-91f00",
  storageBucket: "exercise-five-91f00.appspot.com",
  messagingSenderId: "179151166872",
  appId: "1:179151166872:web:1c6045b85d001fa257dfed"
};

function App() {
  return (
    <div className="App">
      <Header  />
      <Router>

        <Route exact path="/login">
          <Login  />
        </Route>

        <Route exact path="/create-account">
          <CreateAccount />
        </Route>

        <Route exact path="/">
          <UserProfile  />
        </Route>

      </Router>

    </div>
  );
}


export default App;
