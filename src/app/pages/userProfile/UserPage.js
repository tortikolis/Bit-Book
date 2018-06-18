import React, { Component, Fragment } from "react"
import { fetchUser } from "../../../services/userService";
import { Link } from "react-router-dom";
import { Modal } from "./partials/Modal";

export class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            isModalActive: false,
            fullNameValue: "",
            descriptionValue: ""
        }
    }

    getUser = () => {
        fetchUser()
            .then(user => {
                this.setState({ user: user })
                console.log(this.state.user);
            })
    }

    componentDidMount() {
        this.getUser()
    }

    resetButtonType = () => {
        this.setState({ isModalActive: false })
    }

    clickedBtn = event => {
        this.setState({ isModalActive: true });
    }

    updateNameValue = event => {
        this.setState({ fullNameValue: event.target.value})
        console.log(this.state.fullNameValue)
    }
    
    updateDescriptionValue = event => {
        this.setState({ descriptionValue: event.target.value})
        console.log(this.state.descriptionValue);
    }

    updateFullName = () => {
        this.setState({
            user: {
                name: this.state.fullNameValue,
            }
        })
        console.log(this.state.user);
    }

    render() {
        const { userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount } = this.state.user;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="profile-holder">
                                <img src={avatarUrl} className="profile-img" />

                                <h2>{name}</h2>
                                <a className="waves-effect waves-light btn-flat modal-trigger" onClick={this.clickedBtn}>Edit Profile</a>
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
                                <Modal isModalActive={this.state.isModalActive} onCloseModal={this.resetButtonType} user={this.state.user} updateFullName={this.updateFullName} updateNameValue={this.updateNameValue}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>



        )
    }
}


