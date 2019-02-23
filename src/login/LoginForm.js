import React from 'react';
import ActionBtn from '../modules/ActionBtn.js'

export default class Login extends React.Component {

  render() {
    return(
      <div className="login">
        <form className="form" id="login_form" onChange={this.props.handleChange}>
          <div className="row">
            <div className='title'>Name</div>
            <input name="name" />
          </div>
          <div className="row">
            <div className='title'>Password</div>
            <input name="password" type="password"/>
          </div>
        </form>
        <ActionBtn Text="Login" onClick={this.props.login} />
      </div>
    )}
}
