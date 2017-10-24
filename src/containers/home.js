import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import firebase from 'firebase'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import '../css/home.css'

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: 'test@test.com',
      password: '123456'
    }
  }

  componentDidMount() {
    const { history } = this.props
    console.log('history: ', history);

    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        history.replace('/login')
      } else {
        history.replace('/')
      }
    })
  }

  _onchangeText = (e) => {
    if(e.target.name) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  _submitForm = (e) => {
    const { email, password } = this.state

    if(email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          if(error) console.log('Error: ', error)
        });
    }
  }

  render() {
    const { email, password } = this.state

    return (
      <div onClick={() => firebase.auth().signOut()}>
        Home!
      </div>
    );
  }
}

export default withRouter(Home);
