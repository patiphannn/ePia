import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import firebase from 'firebase'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import '../css/login.css'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: 'test@test.com',
      password: '123456'
    }
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
    console.log('this.props: ', this.props);

    const { email, password } = this.state

    return (
      <Form size="large" className="login-form" onSubmit={this._submitForm}>
        <Form.Field>
          <label>E-mail</label>
          <input type="email" id="email" name="email" placeholder="E-mail" value={email} onChange={this._onchangeText} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={this._onchangeText} />
        </Form.Field>
        <Button positive type="submit">Login</Button>
      </Form>
    );
  }
}

export default withRouter(Login);
