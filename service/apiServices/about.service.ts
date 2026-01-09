import { mainApiWrapper } from "../apiHelper";
import { apiUrl } from "../apiUrl";
import { TAboutResponse } from "@/types/about.type";
export const GetAbout = async () => {
    const response: TAboutResponse = await mainApiWrapper(
        apiUrl.about.get.method,
        apiUrl.about.get.url,
    )
    return response?.data
}