import { mainApiWrapper } from "../apiHelper";
import { apiUrl } from "../apiUrl";
import { TNoticesResponse, TNoticeResponse } from "@/types/notice.type";
export const getNotices = async () => {
  const response: TNoticesResponse = await mainApiWrapper(
    apiUrl.notice.get.method,
    apiUrl.notice.get.url
  );
  return response.data;
};
export const getNoticeById = async (id: string) => {
  const response: TNoticeResponse = await mainApiWrapper(
    apiUrl.notice.getById.method,
    apiUrl.notice.getById.url + `/${id}`
  );
  return response?.data;
};

export const getFrontNotice = async () => {
  const response: TNoticesResponse = await mainApiWrapper(
    apiUrl.notice.getFront.method,
    apiUrl.notice.getFront.url
  );
  return response?.data;
}