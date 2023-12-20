import api from "./api";
import { URLS } from "./constants";

export interface IAddTag {
  name: string;
  code: string;
}

interface ResponseAddTagApi extends IAddTag {}

export const addTagApi = async function (data: IAddTag) {
  try {
    return await api.post<ResponseAddTagApi>(URLS.addTag, data);
  } catch (error: any) {
    return error.response ?? new Error("An error occurred");
  }
};
