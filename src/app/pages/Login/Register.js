import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRegisterErrorAction, resetRegisterFormAction, setRegisterFormAction } from '../../../state/actions/registerActions';

class Register extends Component {

    registerHandler = (event) => {
        event.preventDefault();

        const { registerName, registerUsername, registerPassword, registerEmail } = this.props;
        const content = {
            username: registerUsername,
            password: registerPassword,
            name: registerName,
            email: registerEmail
        }
        //check if password valid
        if (content.password.length < 6) {
            return this.props.setError("Password must be at least 6 characters long")
        }
        if (!content.email.includes('@')) {
            return this.props.setError("Email is not valid")
        }

        this.sendRegistrationForm(content);
    }

    sendRegistrationForm = (data) => {
        this.props.sendRegisterData(data)
            .then((response) => {
                if (response.error) {
                    return this.props.setError(response.error.message);
                }
                this.props.resetRegisterForm();
                this.props.onRegister();
            })
    }

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="registerName" type="text" className="validate" value={this.props.registerName} onChange={this.props.onChangeHandler} />
                            <label htmlFor="registerName">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="registerUsername" type="text" className="validate" autoComplete="reggister-username" value={this.props.registerUsername} onChange={this.props.onChangeHandler} />
                            <label htmlFor="registerUsername">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="registerPassword" type="password" className="validate" autoComplete="register-password" value={this.props.registerPassword} onChange={this.props.onChangeHandler} />
                            <label htmlFor="registerPassword">Pass</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="registerEmail" type="email" className="validate" value={this.props.registerEmail} onChange={this.props.onChangeHandler} />
                            <label htmlFor="registerEmail">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.registerHandler}>Register
                <i className="material-icons right">account_box</i>
                    </button>
                    <p className="red-text">{this.props.errorMsg}</p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        registerUsername: state.register.registerUsername,
        registerPassword: state.register.registerPassword,
        registerName: state.register.registerName,
        registerEmail: state.register.registerEmail,
        errorMsg: state.register.errorMsg 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setError: err => { dispatch(setRegisterErrorAction(err)) },
        resetRegisterForm: () => { dispatch(resetRegisterFormAction()) },
        onChangeHandler: event => { dispatch(setRegisterFormAction(event.target.id, event.target.value)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);