import { apiUrl } from "../apiUrl";
import { mainApiWrapper } from "../apiHelper";
import { TTeamCategoryResponse } from "@/types/team-category.type";

export const GetTeamCategory = async () => {
  const response: TTeamCategoryResponse = await mainApiWrapper(
    apiUrl.teamCategory.get.method,
    apiUrl.teamCategory.get.url
  );
  return response?.data;
};
