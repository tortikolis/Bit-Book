import {
  PROFILE,
  PUTPROFILES,
  UPLOAD,
  USERS,
  USERSGET
} from "../shared/constants";
import { fetchService } from "./fetchService";
import { User } from "../entities/User";
import { Profile } from "../entities/Profile";

export const getAllUsers = () => {
  return fetchService.get(USERS).then(response => {
    return response.map(user => {
      const { id, name, aboutShort, lastPostDate, avatarUrl } = user;
      return new User(id, name, aboutShort, lastPostDate, avatarUrl);
    });
  });
};

export const uploadUser = (userName, userDescription, userAvatarUrl) => {
  const updateData = {
    name: userName,
    email: "emil@gmail.com",
    aboutShort: userDescription,
    about: "lorem ipsum",
    avatarUrl: userAvatarUrl
  };
  return fetchService.put(PUTPROFILES, updateData);
};

export const uploadUserImage = image => {
  const formData = new FormData();
  formData.append("file", image);
  return fetchService.upload(UPLOAD, formData);
};

export const fetchProfile = () => {
  return fetchService.get(PROFILE).then(response => {
    const {
      userId,
      name,
      email,
      aboutShort,
      about,
      avatarUrl,
      postsCount,
      commentsCount
    } = response;
    return new Profile(
      userId,
      name,
      email,
      aboutShort,
      about,
      avatarUrl,
      postsCount,
      commentsCount
    );
  });
};

export const fetchUser = id => {
  return fetchService.get(USERSGET + id).then(response => {
    const {
      userId,
      name,
      email,
      aboutShort,
      about,
      avatarUrl,
      postsCount,
      commentsCount
    } = response;
    return new Profile(
      userId,
      name,
      email,
      aboutShort,
      about,
      avatarUrl,
      postsCount,
      commentsCount
    );
  });
};
