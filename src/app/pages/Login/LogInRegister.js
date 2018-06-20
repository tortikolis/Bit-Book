import React, { Component } from 'react';

import { Login } from './Login'
import { Register } from './Register'
import { postRegister } from '../../../services/postFetch'

export class LoginRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    sendRegisterData = (data) =>{
        postRegister(data)
        .then((res) => {
            console.log(res)
        })
    }


    registerHandler =(event) =>{
        event.preventDefault();
        const {registerName, registerUsername,registerPassword,registerEmail} = this.state
        const content = {
            username: registerUsername,
            password: registerPassword,
            name: registerName,
            email: registerEmail
        }
        console.log(content);
        this.sendRegisterData(content)
        
    }

    onChangeHandler = (event) => {
        const elementId = event.target.id;
        const elementValue = event.target.value;
        this.setState({
            [elementId] : elementValue
        })
    }




    render() {
        return (
            <div className="container" id='login'>
                <div className='row'>
                    <div className='col s12 m6' id='login-text'>
                        <h3>BitBook Login</h3>
                        <p>
                            BitBook is social network that provides easy sharing of your photos,videos and thoughts.
                        </p>
                    </div>
                    <div className='col s12 m6 ' id='login-form'>
                        <ul id="tabs-swipe-demo" class="tabs">
                            <li class="tab col s3"><a href="#test-swipe-1" className='teal-text' id='register'>Register</a></li>
                            <li class="tab col s3"><a className="active teal-text" href="#test-swipe-2">Login</a></li>
                        </ul>
                        <div id="test-swipe-1" class="col s12 ">
                            <Register onChangeHandler={this.onChangeHandler} registerHandler={this.registerHandler}/>
                        </div>
                        <div id="test-swipe-2" class="col s12 ">
                            <Login onChangeHandler={this.onChangeHandler}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}