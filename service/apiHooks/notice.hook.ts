import { useQuery } from "@tanstack/react-query";
import {
  getNotices,
  getFrontNotice,
  getNoticeById,
} from "@/service/apiServices/notice.service";
import { TNotice } from "@/types/notice.type";

export const NOTICE_QUERY_KEYS = {
  notices: "notices",
  frontNotices: "frontNotices",
  noticeById: "noticeById",
};

export const useNotices = () => {
  return useQuery<TNotice[]>({
    queryKey: [NOTICE_QUERY_KEYS.notices],
    queryFn: getNotices,
  });
};

export const useFrontNotices = () => {
  return useQuery<TNotice[]>({
    queryKey: [NOTICE_QUERY_KEYS.frontNotices],
    queryFn: getFrontNotice,
  });
};

export const useGetNoticeById = (id: string) => {
  return useQuery<TNotice>({
    queryKey: [NOTICE_QUERY_KEYS.noticeById, id],
    queryFn: () => getNoticeById(id),
  });
};
