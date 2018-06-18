import { fetchService } from './fetchService';
import { Comment } from '../entities/Comment';
import { COMMENTS, COMMENTSPOST } from '../shared/constants';

export const getComments = (postId) => {
    return fetchService.get(COMMENTS + postId)
        .then((response) => {
            return response.map((comment) => {
                const { id, dataCreated, body, postId, authorName, authorId } = comment;
                return new Comment(id, dataCreated, body, postId, authorName, authorId);
            })
        })
}

export const postComment = content => {
    return fetchService.post(COMMENTSPOST, content)
}