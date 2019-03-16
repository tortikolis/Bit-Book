import { fetchService } from "./fetchService";
import { REGISTER, LOGIN } from "../shared/constants";

export const postRegister = content => {
  return fetchService.post(REGISTER, content);
};

export const postLogin = content => {
  return fetchService.post(LOGIN, content).then(response => {
    if (response.error) {
      return response;
    }

    localStorage.setItem("sessionId", response.sessionId);
    return response;
  });
};

export const logOut = () => {
  localStorage.removeItem("sessionId");
};
