import React from 'react';

const Login = () => (
  <main className="login">
    <div className="login-form">
      <h1>Inicia Session</h1>
      <form action="">
        <div className="input-form">
          <input type="text" placeholder="Correo" />
        </div>
        <div className="input-form">
          <input type="text" placeholder="Contraseña" />
        </div>
        <div>
          <input type="submit" className="btn btn-primary" value="entar" />
        </div>
      </form>
    </div>
  </main>
);

export default Login;
