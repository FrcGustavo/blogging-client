import React from 'react';

import { Wrapper, Input, Label } from './styles';

const PostFormActions = () => (
  <Wrapper>
    <div>
      <Label htmlFor="cover">
        Cargar imagen
        <input type="file" name="cover" id="cover" />
      </Label>
    </div>
    <div>
      <Input type="submit" value="Guardar" />
      <Input type="submit" value="Publicar" />
    </div>
  </Wrapper>
);

export default PostFormActions;
