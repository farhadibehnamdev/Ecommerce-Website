import api from "./api";
import { URLS } from "./constants";

export interface IAddCategory {
  code: string;
  name: string;
  description: string;
}

interface ResponseAddCategoryApi extends IAddCategory {}

export const addCategoryApi = async function (data: IAddCategory) {
  try {
    return await api.post<ResponseAddCategoryApi>(URLS.addCategory, data);
  } catch (error: any) {
    throw error.response ?? new Error("An error occurred");
  }
};
