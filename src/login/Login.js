import React from 'react';
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm.js'
import Authentication from '../auth/Authentication.js';

import './login.scss';

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  handleChange(element) {
    var target = element.target

    this.setState({
      [target.name]: target.value
    })
  }

  login() {

    Authentication.getTokenFromBasicAuth(this.state.name, this.state.password, (result) => {
      if (result === 'success') {
        window.alert("Successfully Logged In.")

        this.setState({
          loggedIn: true
        })
      } else {
        window.alert("Invalid Credentials. Try Again.")
      }
    })
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />
    } else {
      return <LoginForm handleChange={this.handleChange.bind(this)} login={this.login.bind(this)} />
    }
  }
}