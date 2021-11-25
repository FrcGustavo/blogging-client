import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createOnePost } from '@apis/apiRestV2';

const GhostPostsCreatePage = () => {
  const [form, handleForm] = useState({ title: '' });

  const handleChangeForm = (event: any) => {
    handleForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSumbit = (event: any) => {
    event.preventDefault();
    createOnePost(form)
      .then((idPost) => {
        alert('El post se creo con exito. ' + idPost);
      })
      .catch()
      .finally();
    console.log(form);
  };

  return (
    <div>
      <h1>Crear post</h1>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="">Titulo</label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Escribe el titulo"
            onChange={handleChangeForm}
          />
        </div>
        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default GhostPostsCreatePage;
