import { fetchService } from './fetchService';
import { USERS } from '../shared/constants';
import { User } from '../entities/User'

export const getAllUsers = () => {
    return fetchService.get(USERS)
    .then((response) => {
        return response.map((user) => {
            const { id, name, aboutShort, lastPostDate, avatarUrl } = user;
            return new User( id, name, aboutShort, lastPostDate, avatarUrl );
        })
    })
}