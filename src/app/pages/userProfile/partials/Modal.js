import React, { Fragment, Component } from "react"
import { Link } from "react-router-dom";


export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    updateProfile = () => {
        this.props.updateFullName()
        this.props.onCloseModal();
    }

    

    render() {
        if (!this.props.isModalActive) {
            return null
        }

        return (
            <Fragment>
                <div className="modal-holder" >
                    <div className="modal open" id="show-modal">
                        <div className="modal-content" id="updateProfileWraper">
                            <h4>Update Profile</h4>
                            <div className="row">
                                <div className="col s12">

                                    <div className="card horizontal" id="updateProfileHolder">
                                        <div className="row">
                                            <div className="col s4">
                                                <div className="card-image" id="updateProfileImg">
                                                    <img src={this.props.user.avatarUrl} />
                                                    <a className="waves-effect waves-light btn" id="uploadBtn">Upload</a>
                                                </div>
                                            </div>
                                            <div className="col s8">
                                                <div className="card-stacked">
                                                    <div className="card-content" id="nameInputHolder">
                                                        <label htmlFor="name">Name</label>
                                                        <input placeholder="Full Name" id="name" type="text" className="validate" onChange={this.props.updateNameValue} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="row">
                                                <div className="col s12">
                                                    <input placeholder="Description" id="description" type="text" className="validate" onChange={this.props.updateDescriptionValue}/>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer" id="updateProfileFooter">
                                <Link to="/profile" className="modal-close waves-effect waves red btn close-btn" onClick={this.props.onCloseModal}>Close</Link>
                                <Link to="/profile" className="modal-close waves-effect waves-green btn" onClick={this.updateProfile}>Update</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }





}