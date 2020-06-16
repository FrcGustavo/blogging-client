import React from 'react';
import PropTypes from 'prop-types';

import TextArea from '../../atoms/TextArea';

const Editor = ({ body, preview, handleChange }) => (
  <section>
    <TextArea
      name="body"
      value={body}
      handleChange={handleChange}
    />
    <div className="output post-content" dangerouslySetInnerHTML={{ __html: preview }} />
  </section>
);

Editor.propTypes = {
  body: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Editor;
