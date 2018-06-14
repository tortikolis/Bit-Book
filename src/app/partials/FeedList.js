import React, { Component } from 'react';
import { VideoPost } from './posts/VideoPost';
import { TextPost } from './posts/TextPost';
import { ImagePost } from './posts/ImagePost';
import { getAllPosts } from '../../services/postFetch'

export class FeedList extends Component {
    constructor(props) {
        super(props)

        this.state = {
           posts: [] 
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

    render() {

        return (
            <div>
                    {this.state.posts.map((post, key) => {
                        if (post.type === 'video'){
                            return <VideoPost  key= {key} post={post}/>
                        }else if(post.type === 'text'){
                            return <TextPost key= {key} post={post}/>
                        }else{
                           return <ImagePost key= {key} post={post}/>
                        }
                    })}
             </div>
        )
    }
}
