import { apiUrl } from "./../apiUrl";
import { mainApiWrapper } from "../apiHelper";
import { TBannersResponse } from "@/types/banners.type";
export const getBanners = async () => {
  const response: TBannersResponse = await mainApiWrapper(
    apiUrl.banner.get.method,
    apiUrl.banner.get.url
  );
  return response.data;
};
