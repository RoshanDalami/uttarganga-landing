import { mainApiWrapper } from "../apiHelper";
import { apiUrl } from "../apiUrl";
import { TGalleryResponse } from "@/types/gallery.type";

export const GetGalleryUserView = async () => {
  const response: TGalleryResponse = await mainApiWrapper(
    apiUrl.gallery.userview.method,
    apiUrl.gallery.userview.url
  );
  return response?.data;
};
