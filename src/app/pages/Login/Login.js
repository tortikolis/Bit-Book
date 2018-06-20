import React from 'react';

export const Login = (props) =>{

    return(
        
        <div class="row">
        <form class="col s12">
           
            <div class="row">
                <div class="input-field col s12">
                    <input  id="loginName" type="text" class="validate" onChange={props.onChangeHandler}/>
                    <label for="loginName">Username</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="loginPassword" type="password" class="validate" onChange={props.onChangeHandler}/>
                    <label for="loginPassword">Pass</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Login
                <i class="material-icons right">vpn_key</i>
            </button>
        </form>
    </div>
    )
}