import { PROFILE } from "../shared/constants";
import { fetchService } from "./fetchService";
import { Profile } from "../entities/Profile";




export const fetchUser = () => {
    return fetchService.get(PROFILE)
    .then((response) => {
        const { userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount } = response;
        return new Profile(userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount);
    })
}