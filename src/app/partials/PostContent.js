import React, { Component, Fragment } from 'react';
import { ImagePostBody } from './postBody/ImagePostBody';
import { VideoPostBody } from './postBody/VideoPostBody';
import { TextPostBody } from './postBody/TextPostBody';
import { CommentList } from './CommentList';
import { getComments } from '../../services/commentFetch';
import { getVideoPost, getImagePost, getTextPost } from '../../services/postFetch';
import { CommentForm } from './CommentForm';
import { Loading } from './Loading';

export class PostContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            comments: []
        }
    }

    getVideoPostData = () => {
        getVideoPost(this.props.match.params.id)
        .then((videoPost) => {
            console.log(videoPost)
            this.setState({
                post: videoPost
            })
        })
    }

    getImagePostData = () => {
        getImagePost(this.props.match.params.id)
        .then((imagePost) => {
            console.log(imagePost)
            this.setState({
                post: imagePost
            })
        })
    }

    getTextPostData = () => {
        getTextPost(this.props.match.params.id)
        .then((textPost) => {
            console.log(textPost)
            this.setState({
                post: textPost
            })
        })
    }

    getCommentsData = () =>{
        getComments(this.props.match.params.id)
        .then((commentList) => {
            console.log(commentList)
            this.setState({
                comments: commentList
            })
            
        })
    }

    componentDidMount(){
        if(this.props.match.params.type === 'video'){
            this.getVideoPostData()
        } else if (this.props.match.params.type === 'image'){
            this.getImagePostData()
        } else {
            this.getTextPostData()
        }

        this.getCommentsData()
        
    }


    render() {
        if (!this.state.post){
            return <Loading />
        }
        const postType = this.state.post.type;
         const { comments } = this.state;
         const { post } = this.state
           return(
            <div className="container">
               {postType === 'text' && <TextPostBody post={post}/>}
               {postType === 'image' && <ImagePostBody post={post}/>}
               {postType === 'video' && <VideoPostBody post={post}/>}
               <CommentForm />
               <CommentList comments={comments}/>
            </div>
           )
       

    }
}