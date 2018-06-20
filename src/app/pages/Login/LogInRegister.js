import React, { Component } from 'react';
import M from 'materialize-css'

import { Login } from './Login'
import { Register } from './Register'
import { postRegister, postLogin} from '../../../services/postFetch'

export class LoginRegister extends Component {
    constructor(props) {
        super(props)
        this.activeTab = React.createRef();
        this.state = {
         
        }
    }

    sendRegisterData = (data) => {
        return postRegister(data)      
    }

    sendLoginData = (data) =>{
        return postLogin(data)
    }

    componentDidMount() {
        M.Tabs.init(this.activeTab.current);
    }


    render() {
        console.log(window.location.href);
        
        const { registerName, registerUsername, registerPassword, registerEmail } = this.state;
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
                        <ul id="tabs-swipe-demo" className="tabs" ref={this.activeTab}>
                            <li className="tab col s3"><a className="active teal-text" href="#test-swipe-1" >Login</a></li>
                            <li className="tab col s3"><a href="#test-swipe-2" className='teal-text' id='register'>Register</a></li>
                        </ul>
                        <div id="test-swipe-1" className="col s12 ">
                            <Login sendLoginData={this.sendLoginData} />
                        </div>
                        <div id="test-swipe-2" className="col s12 ">
                            <Register  sendRegisterData={this.sendRegisterData}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}