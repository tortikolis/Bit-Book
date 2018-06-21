import React, { Component } from 'react';
import { ImagePostBody } from './postBody/ImagePostBody';
import { VideoPostBody } from './postBody/VideoPostBody';
import { TextPostBody } from './postBody/TextPostBody';
import { CommentList } from './CommentList';
import { getComments } from '../../services/commentFetch';
import { getVideoPost, getImagePost, getTextPost, deletePost } from '../../services/postFetch';
import { CommentForm } from './CommentForm';
import { Loading } from './Loading';
import { postComment } from '../../services/commentFetch';
import { fetchProfile } from '../../services/userService'


export class PostContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            comments: [],
            commentInput: '',
            profile: null
        }
    }

    getProfileInfo = () => {
        fetchProfile()
        .then((profileInfo) => {
            this.setState({
                profile: profileInfo
            })
        })
    }

    getVideoPostData = () => {
        getVideoPost(this.props.match.params.id)
            .then((videoPost) => {
                this.setState({
                    post: videoPost
                })
            })
    }

    getImagePostData = () => {
        getImagePost(this.props.match.params.id)
            .then((imagePost) => {
                this.setState({
                    post: imagePost
                })
            })
    }

    getTextPostData = () => {
        getTextPost(this.props.match.params.id)
            .then((textPost) => {
                this.setState({
                    post: textPost
                })
            })
    }

    getCommentsData = () => {
        getComments(this.props.match.params.id)
            .then((commentList) => {
                this.setState({
                    comments: commentList
                })

            })
    }

    deletePostOnClick = () => {
        deletePost()
    }
 
    commentInputHandler = event => {
        this.setState({ commentInput: event.target.value })
    }

    sendComment = (comment) => {
        const id = this.props.match.params.id;
        const authorId = this.state.profile.authorId;

        const content = {
            body: comment,
            postId: id,
            authorId: authorId
        }
        postComment(content)
            .then(() => this.getCommentsData())

    }

    componentDidMount() {
        if (this.props.match.params.type === 'video') {
            this.getVideoPostData()
        } else if (this.props.match.params.type === 'image') {
            this.getImagePostData()
        } else {
            this.getTextPostData()
        }

        this.getCommentsData()
        this.getProfileInfo()
    }


    render() {
        if (!this.state.post) {
            return <Loading />
        }
        const { comments, post } = this.state;
        const postType = post.type;

        return (
            <div className="container">
                {postType === 'text' && <TextPostBody post={post} />}
                {postType === 'image' && <ImagePostBody post={post} />}
                {postType === 'video' && <VideoPostBody post={post} />}
                
                <CommentForm sendComment={this.sendComment} />
                <CommentList comments={comments} />
            </div>
        )
    }
}