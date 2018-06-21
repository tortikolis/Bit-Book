import React, { Component, Fragment } from "react"
import { fetchUser } from "../../services/userService";


export class UserPage extends Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    getUser = () => {
        const userId = this.props.match.params.id
        fetchUser(userId)
            .then(user => {
                this.setState({ user: user })
            })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        const { name, aboutShort, avatarUrl, postsCount, commentsCount } = this.state.user;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="profile-holder">
                                <img src={avatarUrl} className="profile-img" alt=""/>

                                <h2>{name}</h2>
                                <p className="profile-about">{aboutShort}</p>
                                <div className="row">
                                    <div className="col s12 m6">
                                        <div className="comment-holder">
                                            <i className="material-icons">face</i>
                                            <span>{postsCount} posts</span>
                                        </div>
                                    </div>
                                    <div className="col s12 m6">
                                        <div className="comment-holder">
                                            <i className="material-icons">copyright</i>
                                            <span>{commentsCount} comments</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

