import React, { Fragment, Component } from "react"
import { Link } from "react-router-dom";
import { uploadUserImage, uploadUser } from "../../../../services/userService";

export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullNameValue: "",
            descriptionValue: "",
            imageUrlValue: "",
            selectedImage: null,
            imageIsUploaded: false
        }
    }

    
    updateNameValue = event => {
        this.setState({ fullNameValue: event.target.value})
    }
    
    updateDescriptionValue = event => {
        this.setState({ descriptionValue: event.target.value})
    }
    
    updateImageUrlValue = event => {
        this.setState({ ImageUrlValue: event.target.value})
    }
    
    fileChangedHandler = event => {
        this.setState({selectedImage: event.target.files[0]})
    }
    
    uploadHandler = () => {
        uploadUserImage(this.state.selectedImage)
        .then( image => {
            this.setState({ImageUrlValue: image})
            this.setState({imageIsUploaded:true})} // kada postane true input dobija klasu none pa nestaje
        )
    }
    
    fetchProfile = () => {
        const {fullNameValue, descriptionValue, ImageUrlValue} = this.state;
        uploadUser(fullNameValue, descriptionValue, ImageUrlValue)
        .then(user => { 
            this.props.getUser();
            this.setState({imageIsUploaded:false})
        });
    }
    
    updateProfile = () => {
        this.fetchProfile();
        this.uploadHandler();
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
                                                    <img src={this.props.user.avatarUrl} alt="profile img"/>
                                                     <input type="file" onChange={this.fileChangedHandler} id="uploadImageInput"/>
                                                    <a className="waves-effect waves-light btn" id="uploadBtn" onClick={this.uploadHandler}>Upload</a>
                                                </div>
                                            </div>
                                            <div className="col s8">
                                                <div className="card-stacked">
                                                    <div className="card-content" id="nameInputHolder">
                                                        <label htmlFor="name">Name</label>
                                                        <input value={this.state.fullNameValue} id="name" type="text" className="validate" onChange={this.updateNameValue} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12">
                                                <input placeholder="Image url" id="imageUrl" type="text" className={`${this.state.imageIsUploaded? "none" : "block"}`} onChange={this.updateImageUrlValue} />
                                                <input value={this.state.descriptionValue} id="description" type="text" className="validate" onChange={this.updateDescriptionValue} />
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
