import React, { Component, Fragment } from 'react';
import { VideoPost } from './posts/VideoPost';
import { TextPost } from './posts/TextPost';
import { ImagePost } from './posts/ImagePost';

export class FeedList extends Component {
    constructor(props) {
        super(props)

        this.state = {
           posts: [{type: 'image', imageUrl: 'https://i.ytimg.com/vi/iy9LjmnzU9Y/maxresdefault.jpg'}, {type: 'text', text: 'Bogovi programiranja'}, {type: 'video', videoUrl: 'https://www.youtube.com/embed/F3OFIuIXcSo'}] 
        }
    }

    render() {

        return (
            <div>
                    {this.state.posts.map((post) => {
                        if (post.type === 'video'){
                            return <VideoPost videoUrl={post.videoUrl}/>
                        }else if(post.type === 'text'){
                            return <TextPost text={post.text}/>
                        }else{
                           return <ImagePost imageUrl={post.imageUrl}/>
                        }
                    })}
             </div>
        )
    }
}
