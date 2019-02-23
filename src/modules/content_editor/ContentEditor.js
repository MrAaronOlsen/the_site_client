import React from 'react';
import Editor from 'draft-js-editor'
import { EditorState } from 'draft-js'

import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';

import defaultInlineButtons from 'draft-js-editor/lib/components/PopoverControl/defaultButtons.js'

import './content_editor.scss';
import 'draft-js/dist/Draft.css';

const inlineButtons = defaultInlineButtons.slice()

// Props
// content => Text to be displayed in editor.
// contentId => Unique id of content. Triggers new editor state with content when id changes.
// onSave => function that takes param content.
// handler => funtion that takes a key and value to update parents state. Adds saveEditorContent: this.onSave.
export default class ContentEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contentId: null,
      editorState: EditorState.createEmpty()
    }

    this.props.stateHandler('editorContent', this.editorContent.bind(this))
  }

  componentDidUpdate() {
    const content = this.props.content;
    const contentId = this.props.contentId;

    if (contentId !== null && this.state.selectedId !== contentId) {
      const editorContent = stateFromHTML(content)

      this.setState({
        selectedId: contentId,
        editorState: EditorState.createWithContent(editorContent)
      })
    }
  }

  onChange = (editorState) => {
    this.setState({editorState});
  }

  editorContent() {
    let options = { defaultBlockTag: 'div' };

    const contentState = this.state.editorState.getCurrentContent();
    return stateToHTML(contentState, options)
  }

  render() {

    return (
      <div className="content-editor">
        <Editor
          onChange={this.onChange}
          editorState={this.state.editorState}
          inlineButtons={inlineButtons} />

      </div>
    )
  }
}