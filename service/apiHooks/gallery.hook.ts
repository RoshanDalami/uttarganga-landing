import { useQuery } from "@tanstack/react-query";
import { GetGalleryUserView } from "@/service/apiServices/gallery.service";

export const GALLERY_QUERY_KEY = {
  USER_VIEW: "gallery-user-view",
};

export const useGetGalleryUserView = () => {
  return useQuery({
    queryKey: [GALLERY_QUERY_KEY.USER_VIEW],
    queryFn: GetGalleryUserView,
  });
};
