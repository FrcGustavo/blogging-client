import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, Label } from './styles';

const PostFormActions = ({ handleChange }) => (
  <Wrapper>
    <div>
      <Label htmlFor="cover">
        Cargar imagen
        <input type="file" name="cover" id="cover" onChange={handleChange} />
      </Label>
    </div>
    <div>
      <Input type="submit" value="Guardar" />
      <Input type="submit" value="Publicar" />
    </div>
  </Wrapper>
);

PostFormActions.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default PostFormActions;
