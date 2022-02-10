import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import propTypes from 'prop-types';
import { loginSave } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  emailVerifiyer = () => {
    const { email, password } = this.state;
    const includesAt = email.includes('@');
    const includesCom = email.includes('.com');
    const passwordLength = 6;
    const verifyPassword = password.length >= passwordLength;
    const isButtonDisable = !(includesAt && includesCom && verifyPassword);
    return isButtonDisable;
  }

  buttonClick = () => {
    const { dispatch } = this.props;
    const { email } = this.state;
    dispatch(loginSave(email));
    this.setState({
      redirect: true,
    });
  }

  render() {
    const {
      email, password, redirect,
    } = this.state;
    return (
      <form>
        {redirect ? <Redirect to="/carteira" /> : ''}
        <label htmlFor="email-input">
          email
          <input
            type="email"
            id="email-input"
            name="email"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Password
          <input
            type="password"
            name="password"
            id="password-input"
            data-testid="password-input"
            placeholder="***"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ this.emailVerifiyer() }
          onClick={ this.buttonClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: propTypes.string.isRequired,
};

export default connect()(Login);
