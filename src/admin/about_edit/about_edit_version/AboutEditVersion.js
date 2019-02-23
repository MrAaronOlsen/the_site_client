import React from 'react';

import AboutEditVersionHeader from './AboutEditVersionHeader.js'
import AboutEditVersionList from './AboutEditVersionList.js'

import put from '../../../http/put.js'
import get from '../../../http/get.js'

import './about_edit_version.scss'

const initialContent = {
  body: "",
  id: null
}

export default class AboutEditVersion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allAbouts: [],
      selected: initialContent
    }
  }

  componentDidMount() {
    this.fetchAllAbouts()
    this.fetchCurrentAbout()
  }

  fetchAllAbouts() {
    get('api/v1/abouts', (payload) => {
      if (payload.hasErrors()) {
        console.log(payload.getErrors())
      } else {
        this.setState({
          allAbouts: payload.data
        })
      }
    })
  }

  fetchCurrentAbout() {
    get('api/v1/abouts/current', (payload) => {
      if (payload.hasErrors()) {
        window.alert(payload.getErrors())
      }

      this.setState({
        selected: payload.data
      })
    })
  }

  save() {
    const showVersionId = this.state.selected.id

    var body = {
      model: 'About'
    }

    put('api/v1/current_versions/' + showVersionId, body, (payload) => {
      if (payload.hasErrors()) {
        console.log("[ERROR] Failed to save current About. -> " + payload.getErrors())
      } else {
        window.alert("Save Completed")
      }
    })
  }

  stateHandler(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <div className="about-edit-version">
        <AboutEditVersionHeader save={ this.save.bind(this) } />

        <AboutEditVersionList
          allVersions={ this.state.allAbouts }
          selected={ this.state.selected }
          stateHandler={ this.stateHandler.bind(this) } />
      </div>
    )
  }
}

