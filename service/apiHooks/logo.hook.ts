import { useQuery } from "@tanstack/react-query";
import { getFirstLogo } from "@/service/apiServices/logo.service";
import { TLogo } from "@/types/logo.type";

export const LOGO_QUERY_KEYS = {
  firstLogo: "firstLogo",
};

export const useFirstLogo = () => {
  return useQuery<TLogo>({
    queryKey: [LOGO_QUERY_KEYS.firstLogo],
    queryFn: getFirstLogo,
  });
};
