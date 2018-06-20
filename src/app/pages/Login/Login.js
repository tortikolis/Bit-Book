import React from 'react';

export const Login = (props) =>{

    return(
        
        <div className="row">
        <form className="col s12">
           
            <div className="row">
                <div className="input-field col s12">
                    <input  id="loginName" type="text" className="validate" onChange={props.onChangeHandler}/>
                    <label htmlFor="loginName">Username</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="loginPassword" type="password" className="validate" onChange={props.onChangeHandler}/>
                    <label htmlFor="loginPassword">Pass</label>
                </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Login
                <i className="material-icons right">vpn_key</i>
            </button>
        </form>
    </div>
    )
}