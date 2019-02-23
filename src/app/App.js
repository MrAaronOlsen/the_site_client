import React from 'react';

import Header from '../header/Header.js'
import BioView from '../views/about/AboutView.js'

import Authentication from '../auth/Authentication.js';
import JwtToken from '../auth/JwtToken.js';

import "./app.scss"

export default class App extends React.Component {

  componentDidMount() {
    if (!JwtToken.hasToken()) {

      Authentication.getTokenFromBasicAuth("Guest", "AtTheSite", (result) => {
        if (result === 'success') {
          window.alert("Logged in As Guest")
          this.setState({})
        } else {
          window.alert("Something is Amiss...")
        }
      });
    }
  }

  renderPage() {
    if (JwtToken.hasToken()) {
      return <BioView />
    }
  }

  render() {
    return(
      <div className="app">
        <Header />
        {this.renderPage()}
      </div>
    )
  }
}