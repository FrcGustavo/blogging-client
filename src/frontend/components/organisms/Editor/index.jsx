import React from 'react';
import PropTypes from 'prop-types';

import TextArea from '../../atoms/TextArea';

import { EditorWrapper, OutputText } from './styles';

const Editor = ({ body, preview, handleChange }) => (
  <EditorWrapper>
    <TextArea
      name="body"
      value={body}
      handleChange={handleChange}
    />
    <OutputText className="output post-content" dangerouslySetInnerHTML={{ __html: preview }} />
  </EditorWrapper>
);

Editor.propTypes = {
  body: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Editor;
