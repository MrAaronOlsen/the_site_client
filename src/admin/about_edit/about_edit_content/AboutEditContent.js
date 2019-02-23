import React from 'react';

import AboutEditContentOptions from './AboutEditContentOptions.js'
import ContentEditor from '../../../modules/content_editor/ContentEditor.js';

import put from '../../../http/put.js'
import get from '../../../http/get.js'

import './about_edit_content.scss'

const initialContent = {
  body: "",
  id: null
}

export default class AboutEditContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allAbouts: [],
      selected: initialContent
    }

    this.stateHandler = this.stateHandler.bind(this)
  }

  stateHandler(key, value) {
    this.setState({
      [key]: value
    })
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

  saveContent() {
    const editorContent = this.state.editorContent();
    const selected = this.state.selected;

    var body = {
      body: editorContent
    }

    put('api/v1/abouts/' + selected.id, body, (payload) => {
      if (payload.hasErrors()) {
        console.log("[ERROR] Failed to save content for About. -> " + payload.getErrors())
      } else {
        window.alert("Save Completed")

        this.fetchAllAbouts()
      }
    })
  }

  saveImages(images) {
    const selected = this.state.selected;

    var body = {
      attachments: images,
    }

    put('api/v1/abouts/images/' + selected.id, body, (payload) => {
      if (payload.hasErrors()) {
        console.log("[ERROR] Failed to save content for About. -> " + payload.getErrors())
      } else {
        window.alert("Save Completed")

        this.fetchAllAbouts()
      }
    })
  }

  handleSelection(id) {
    const oldSelected = this.state.selected;
    const allAbouts = this.state.allAbouts;

    if (oldSelected.id !== id) {
      const newSelected = allAbouts.find((element) => { return element.id === id })

      if (newSelected !== undefined) {
        this.setState({
          selected: newSelected
        })
      }
    }
  }

  render() {
    return (

      <div className="about-edit-content">
        <AboutEditContentOptions
          allAbouts={ this.state.allAbouts }
          selected={ this.state.selected }
          handleSelection={ this.handleSelection.bind(this) }
          saveContent={ this.saveContent.bind(this) }
          saveImages={ this.saveImages.bind(this) }
          selectedImages={ this.state.selected.attachments }
          stateHandler={ this.stateHandler.bind(this)} />

        <ContentEditor
          stateHandler={ this.stateHandler.bind(this) }
          content={ this.state.selected.body }
          contentId={ this.state.selected.id } />

      </div>
    )
  }
}