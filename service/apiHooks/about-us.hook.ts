import { useQuery } from "@tanstack/react-query";
import { GetAbout } from "../apiServices/about.service";

export const ABOUT_QUERY_KEY = {
    GET: "about"
}
export const useAbout = () => {
    return useQuery({
        queryKey: [ABOUT_QUERY_KEY.GET],
        queryFn: GetAbout,
    })
}