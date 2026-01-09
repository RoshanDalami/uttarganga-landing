import { useQuery } from "@tanstack/react-query";
import { getBanners } from "@/service/apiServices/banner.service";
import { TBanners } from "@/types/banners.type";

export const BANNER_QUERY_KEYS = {
  banners: "banners",
};

export const useBanners = () => {
  return useQuery<TBanners[]>({
    queryKey: [BANNER_QUERY_KEYS.banners],
    queryFn: getBanners,
  });
};
