import React, { useState } from 'react';
import base64 from 'base-64';
import config from '../config';

const Login = () => {
  const [form, setForm] = useState({});

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encode = base64.encode(`${form.email}:${form.password}`);

    const headers = new Headers();
    headers.set('Authorization', `Basic ${encode}`);

    fetch(`${config.api}/auth/login`)
      .then((res) => { res.json(); })
      .then(() => {})
      .catch(() => {});
  };

  return (
    <main className="login">
      <div className="login-form">
        <h1>Inicia Session</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <input type="text" name="email" placeholder="Correo" onChange={handleInput} />
          </div>
          <div className="input-form">
            <input type="password" name="password" placeholder="Contraseña" onChange={handleInput} />
          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="entar" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
