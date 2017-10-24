import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import firebase from 'firebase'
import './App.css'

// Libs
import UserLib from './libs/user'

// Containers
import Home from './containers/home'
import Login from './containers/login'

// Initialize Firebase
const configFirebase = {
  apiKey: "AIzaSyBATzxZ1t3GAp5vla3cJsrMpEpxTvqxMlQ",
  authDomain: "epia-fa91a.firebaseapp.com",
  databaseURL: "https://epia-fa91a.firebaseio.com",
  projectId: "epia-fa91a",
  storageBucket: "epia-fa91a.appspot.com",
  messagingSenderId: "975348034003"
}

class App extends Component {

  constructor(props) {
    super(props)
    firebase.initializeApp(configFirebase)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    )
  }
}

export default App
