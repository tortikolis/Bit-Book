import React, { Component } from "react";
import M from 'materialize-css'

export class FilterPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allPost: "All posts",
            text: "Text",
            image: "Image",
            video: "Video",
            windowWidth: ""
        }
        this.selectFilter = React.createRef();
    }

    // updateState = () => {
    //     this.setState({windowWidth: window.innerWidth})
    //     if(this.state.windowWidth < 600) {
    //         this.setState({allPost: ""})
    //         this.setState({text: ""})
    //         this.setState({image: ""})
    //         this.setState({video: ""})
    //     }
    // }
    
    componentDidMount() {
        M.FormSelect.init(this.selectFilter.current);
        // this.updateState();
    } 

    
    render() {
        console.log(this.state.windowWidth);

        return (
            <div className="input-field col s12 m6" id="filter-select">
                <select className="icons" ref={this.selectFilter} onChange={this.props.selectedPost}>
                    <option value="" selected>{window.innerWidth< 600 ? "" : "All Posts" }</option>
                    <option value="text" data-icon="https://www.freeiconspng.com/uploads/document-extension-file-file-format-filename-text-txt-icon--20.png">{window.innerWidth< 600 ? "" : "Text" }</option>
                    <option value="image" data-icon="https://cdn.iconscout.com/public/images/icon/premium/png-256/gallery-thumbnail-image-picture-photo-photograph-photography-camera-file-images-capture-files-31dd2cea63265365-256x256.png">{window.innerWidth< 600 ? "" : "Image" } </option>
                    <option value="video" data-icon="https://cdn4.iconfinder.com/data/icons/cinema-outline-icon-set/30/camera-256.png">{window.innerWidth< 600 ? "" : "Video" } </option>
                </select>
            </div>
        )
    }
}