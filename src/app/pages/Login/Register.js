import React, { Component } from "react";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerUsername: "",
      registerPassword: "",
      registerName: "",
      registerEmail: "",
      errorMsg: ""
    };
  }

  registerHandler = event => {
    const {
      registerName,
      registerUsername,
      registerPassword,
      registerEmail
    } = this.state;

    const content = {
      username: registerUsername,
      password: registerPassword,
      name: registerName,
      email: registerEmail
    };

    event.preventDefault();

    if (registerPassword.length < 6) {
      return this.setError("Password must be at least 6 characters long");
    }
    if (!registerEmail.includes("@")) {
      return this.setError("Email is not valid");
    }

    this.sendRegistrationForm(content);
  };

  resetRegisterForm = () => {
    this.setState({
      registerUsername: "",
      registerPassword: "",
      registerName: "",
      registerEmail: "",
      errorMsg: ""
    });
  };

  sendRegistrationForm = data => {
    const { sendRegisterData, onRegister } = this.props;

    sendRegisterData(data).then(response => {
      if (response.error) {
        return this.setState({ errorMsg: response.error.message });
      }

      this.resetRegisterForm();
      onRegister();
    });
  };

  invalidPassword = () => {
    this.setState({
      errorMsg: "Password must be at least 6 characters long"
    });
  };

  setError = message => {
    this.setState({
      errorMsg: message
    });
  };

  onChangeHandler = event => {
    const elementId = event.target.id;
    const elementValue = event.target.value;
    this.setState({
      [elementId]: elementValue
    });
  };

  render() {
    const {
      registerName,
      registerUsername,
      registerPassword,
      registerEmail,
      errorMsg
    } = this.state;

    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="registerName"
                type="text"
                className="validate"
                value={registerName}
                onChange={this.onChangeHandler}
              />
              <label htmlFor="registerName">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="registerUsername"
                type="text"
                className="validate"
                autoComplete="reggister-username"
                value={registerUsername}
                onChange={this.onChangeHandler}
              />
              <label htmlFor="registerUsername">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="registerPassword"
                type="password"
                className="validate"
                autoComplete="register-password"
                value={registerPassword}
                onChange={this.onChangeHandler}
              />
              <label htmlFor="registerPassword">Pass</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="registerEmail"
                type="email"
                className="validate"
                value={registerEmail}
                onChange={this.onChangeHandler}
              />
              <label htmlFor="registerEmail">Email</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={this.registerHandler}
          >
            Register
            <i className="material-icons right">account_box</i>
          </button>
          <p className="red-text">{errorMsg}</p>
        </form>
      </div>
    );
  }
}
