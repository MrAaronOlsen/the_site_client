import React from 'react';
import renderHTML from 'react-render-html';

import get from '../../http/get.js';

import ProfileImage from './ProfileImage.js'

import './about_view.scss';

export default class AboutView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      attachments: []
    }
  }

  componentDidMount() {
    get('api/v1/abouts/current', (payload) => {
      if (payload.hasErrors()) {
        window.alert(payload.getErrors())
      }

      var about = payload.data;

      this.setState({
        body: about.body,
        attachments: about.attachments
      })
    })
  }

  render() {
    return (
      <div className='main-window'>
        <ProfileImage attachments={this.state.attachments}/>
        <div className='text_area'>
          {renderHTML(this.state.body)}
        </div>
      </div>
    )
  }
}