import { get } from "../apiHelper";
import { endpoints } from "../urlHelper"

export const getLeadsByUser = (id:number) => {
    console.log({ id });
    let url = endpoints.leads.getLeadsByUser + `/${id}`;
    return get(url, {});
}