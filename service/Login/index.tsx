import { post } from "../apiHelper";
import { endpoints } from "../urlHelper"

export const login = (data:object) => {
    let url = endpoints.login.login;
    return post(url, data);
}