import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Login extends React.Component {
  render() {
    return (
      <>
        <Redirect to="/" />
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="***"
        />

        <button
          type="button"
          disabled="true"
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
