import React, { Component, Fragment } from 'react';
import { Modals } from './Modals';
import { Buttons } from './Buttons';
import { EmptyFeedMessage } from './EmptyFeedMessage';


export class Feed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feed: [],
            buttonType: null
        }
    }

    clickedBtn = event => {
        let targetBtn = event.target.parentElement.getAttribute("data-target");
        this.setState({buttonType:targetBtn});
        if(this.state.buttonType) {
        const modalHolder = document.querySelector(".modal-holder");
                modalHolder.classList.remove("none");
        }
    }

    render() {
        console.log(this.state.buttonType);
        
        if (this.state.feed.length === 0) {
            return (
                <div className="row container">
                    <div className="col s12">
                        <EmptyFeedMessage  />
                        <Modals  buttonType={this.state.buttonType}/>
                        <Buttons  activeBtn={this.clickedBtn}/>
                    </div>
                </div>
            )
        }
    }
}