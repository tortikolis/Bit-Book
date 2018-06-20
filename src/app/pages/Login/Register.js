import React from 'react';

export const Register = (props) =>{

    return(
        <div class="row">
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <input  id="registerName" type="text" class="validate" onChange={props.onChangeHandler}/>
                    <label for="registerName">Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input  id="registerUsername" type="text" class="validate" onChange={props.onChangeHandler}/>
                    <label for="registerUsername">Username</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="registerPassword" type="password" class="validate" onChange={props.onChangeHandler}/>
                    <label for="registerPassword">Pass</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="registerEmail" type="email" class="validate" onChange={props.onChangeHandler}/>
                    <label for="registerEmail">Email</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action" onClick={props.registerHandler}>Register
            <i class="material-icons right">account_box</i>
            </button>
        </form>
    </div>
    )
}