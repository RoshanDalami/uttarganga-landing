import { mainApiWrapper } from "../apiHelper";
import { apiUrl } from "../apiUrl";
import { TLogoResponse } from "@/types/logo.type";
export const getFirstLogo = async () => {
  const response: TLogoResponse = await mainApiWrapper(
    apiUrl.logo.first.method,
    apiUrl.logo.first.url
  );
  return response.data;
};
