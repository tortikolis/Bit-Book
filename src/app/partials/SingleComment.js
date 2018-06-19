import React, { Component } from 'react';
import { fetchUser } from '../../services/userService';


export class SingleComment extends Component{
    constructor(props){
        super(props),

        this.state = {
            user: {}
        }
    }

    fetchUserData(){
        fetchUser(this.props.comment.authorId)
        .then((user) => {
            this.setState({user:user})
        })
    }

    componentDidMount(){
        this.fetchUserData();
    }

    render(){
        return (
            <div className="collection-item avatar comment">
                <img src={this.state.user.avatarUrl} alt="" className="circle" />
                <span className="title username">{this.props.comment.authorName}</span>
                <p>{this.props.comment.body}
                </p>
            </div>
        ) 

    }

    
}

