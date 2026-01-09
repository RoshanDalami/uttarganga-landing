import { mainApiWrapper } from "../apiHelper";
import { apiUrl } from "../apiUrl";
import { TActivitiesByIdResponse, TActivitiesResponse } from "@/types/activities.type";
export const GetActivities = async () => {
    const response: TActivitiesResponse = await mainApiWrapper(
        apiUrl.activities.get.method,
        apiUrl.activities.get.url,
    )
    return response?.data
}

export const GetActivitiesById = async (id: string) => {
    const response: TActivitiesByIdResponse = await mainApiWrapper(
        apiUrl.activities.getActivitiesById.method,
        apiUrl.activities.getActivitiesById.url + `/${id}`,
    )
    return response?.data
}
