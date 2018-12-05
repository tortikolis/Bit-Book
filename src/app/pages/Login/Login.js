import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { setUsenameAndPasswordAction, resetLoginFormAction, setErrorMsgAction } from '../../../state/actions/loginActions';

class Login extends Component {

    loginHandler = (event) => {
        event.preventDefault();
        const { loginName, loginPassword } = this.props;
        const content = {
            username: loginName,
            password: loginPassword
        }
        this.sendLoginForm(content)
    }


    goToHomepage = () => this.props.history.push("/");

    sendLoginForm = (data) => {
        this.props.sendLoginData(data)
            .then(({ error }) => {
                if (error) {
                    return this.props.displayError(error.message);
                }
                this.props.resetLoginForm();
                this.goToHomepage();
            })
    }

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loginName" type="text" className="validate" autoComplete="ussername" required onChange={this.props.onChangeHandler} />
                            <label htmlFor="loginName">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loginPassword" type="password" className="validate" autoComplete="current-password" required onChange={this.props.onChangeHandler} />
                            <label htmlFor="loginPassword">Pass</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" onClick={this.loginHandler} name="action">Login
                    <i className="material-icons right">vpn_key</i>
                    </button>
                    <p className="red-text">{this.props.errorMsg} </p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginName: state.login.loginName,
        loginPassword: state.login.loginPassword,
        errorMsg: state.login.errorMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: event => { dispatch(setUsenameAndPasswordAction(event.target.value, event.target.id)) },
        resetLoginForm: () => { dispatch(resetLoginFormAction()) },
        displayError: err => { dispatch(setErrorMsgAction(err)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))