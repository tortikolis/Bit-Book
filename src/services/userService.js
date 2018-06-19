import { PROFILE, PUTPROFILES, UPLOAD } from "../shared/constants";
import { fetchService } from "./fetchService";
import { Profile } from "../entities/Profile";




export const fetchProfile = () => {
    return fetchService.get(PROFILE)
        .then((response) => {
            const { userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount } = response;
            return new Profile(userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount);
        })
}

export const uploadUser = (userName, userDescription, userAvatarUrl) => {
    const updateData = {
        name: userName,
        email: "emil@gmail.com",
        aboutShort: userDescription,
        about: "lorem ipsum",
        avatarUrl: userAvatarUrl
    }
    return fetchService.put(PUTPROFILES, updateData)
}

export const uploadUserImage = image => {
    const formData = new FormData()
    formData.append('file', image);
    return fetchService.upload(UPLOAD, formData )
}