import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../app/App.js';
import Login from '../login/Login.js';
import Dashboard from '../admin/dashboard/Dashboard.js';

import Authorization from '../auth/Authorization.js'

class Main extends React.Component {

  render() {
    const Admin = Authorization(['admin']);

    return(
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/dashboard' component={Admin(Dashboard)} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));