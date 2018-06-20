import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginName: "",
            loginPassword: "",
            errorMsg: ""
        }
    }

    loginHandler = (event) =>{
        event.preventDefault();
        const {loginName, loginPassword} = this.state;
        const content={
            name: loginName,
            password: loginPassword
        }
        this.props.sendLoginData(content)
        .then((request) => {
            if(!request){
                console.log(request)
                this.setState({
                    errorMsg: request.error.message
                })
            }
            return request
        })
        .then((response) =>{
            this.setState({
                loginName: "",
                loginPassword: ""
            }) 
            
        })
    }

    onChangeHandler = (event) => {
        const elementId = event.target.id;
        const elementValue = event.target.value;
        this.setState({
            [elementId]: elementValue
        })
    }

    render() {

        return (

            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loginName" type="text" className="validate" required  onChange={this.onChangeHandler}/>
                            <label htmlFor="loginName">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loginPassword" type="password" className="validate" required onChange={this.onChangeHandler} />
                            <label htmlFor="loginPassword">Pass</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" onClick={this.loginHandler} name="action">Login
                    <i className="material-icons right">vpn_key</i>
                    </button>
                    <p className="red-text">{this.state.errorMsg} </p>
                </form>
            </div>
        )

    }

}