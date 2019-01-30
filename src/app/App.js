import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/Header.js'
import Bio from '../bio/Bio.js'

import "./app.scss"

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <Header />
        <Bio />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));