import { Post } from '../entities/Post';
import { fetchService } from './fetchService';
import { POSTS } from '../shared/constants';


export const getAllPosts = () => {
    return fetchService.get(POSTS)
        .then((response) => {
            return response.map((post) => {
                const { videoUrl, imageUrl, text, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                return new Post(videoUrl, imageUrl, text, id, dateCreated, userId, userDisplayName, type, commentsNum);
            })
        })
}