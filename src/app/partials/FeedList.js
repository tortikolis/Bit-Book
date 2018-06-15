import React, { Component } from 'react';
import { VideoPost } from './posts/VideoPost';
import { TextPost } from './posts/TextPost';
import { ImagePost } from './posts/ImagePost';
import { getAllPosts } from '../../services/postFetch'
import { EmptyFeedMessage } from './EmptyFeedMessage';

export class FeedList extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { posts } = this.props;
        
        if (!posts.length) {
            <EmptyFeedMessage  />
        }

        return (
            <div>
                    {posts.map((post, key) => {
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
