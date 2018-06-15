import React, { Component, Fragment } from 'react';
import { Modals } from './Modals';
import { Buttons } from './Buttons';
import { FeedList } from './FeedList';
import { getAllPosts } from '../../services/postFetch';

export class Feed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            buttonType: null,
            postNum: 0
        }
    }

    getPosts = () =>{
        getAllPosts()
        .then((postList) => {
            console.log(postList)
            this.setState({
                posts: postList
            })
        })
    }

    componentDidMount(){
        this.getPosts()
        
    }

    resetButtonType = () => {
        this.setState({buttonType: null})
    }

    clickedBtn = event => {
        let targetBtn = event.target.parentElement.getAttribute("data-target");
        this.setState({buttonType:targetBtn});
    }



    render() {
        return (
            <div className="row container feed">
                <div className="col s12">
                    <FeedList posts={this.state.posts} />
                    <Modals  buttonType={this.state.buttonType} closeModal={this.resetButtonType} changeState={this.getPosts}/>
                    <Buttons  activeBtn={this.clickedBtn}/>
                </div>
            </div>
        )
    }
}