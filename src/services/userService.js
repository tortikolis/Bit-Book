import { fetchService } from './fetchService';
import { USERS } from '../shared/constants';
import { User } from '../entities/User';
import { PROFILE } from "../shared/constants";
import { Profile } from "../entities/Profile";

export const getAllUsers = () => {
    return fetchService.get(USERS)
    .then((response) => {
        return response.map((user) => {
            const { id, name, aboutShort, lastPostDate, avatarUrl } = user;
            return new User( id, name, aboutShort, lastPostDate, avatarUrl );
        })
    })
}


export const fetchUser = () => {
    return fetchService.get(PROFILE)
    .then((response) => {
        const { userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount } = response;
        return new Profile(userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount);
    })
}
