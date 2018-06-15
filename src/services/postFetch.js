import { fetchService } from "./fetchService";
import { TEXTPOSTS, VIDEOPOSTS, IMAGEPOST, TEXTPOSTSGET } from "../shared/constants";

import { Post, TextPost, VideoPost, ImagePost } from '../entities/Post';
import { POSTS } from '../shared/constants';




export const getAllPosts = () => {
    return fetchService.get(POSTS)
        .then((response) => {
            return response.map((post) => {
                const { videoUrl, imageUrl, text, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                if (type === "text") {
                    return new TextPost(text, id, dateCreated, userId, userDisplayName, type, commentsNum);
                }
                if (type === "image") {
                    return new ImagePost(imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum);
                }
                if (type === "video") {
                    return new VideoPost(videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum);
                }

            })
        })
}

export const postText = content => {
    return fetchService.post(TEXTPOSTS, content)
}

export const postVideo = content => {
    return fetchService.post(VIDEOPOSTS, content)
}

export const postImage = content => {
    return fetchService.post(IMAGEPOST, content)
}