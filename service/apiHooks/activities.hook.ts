import { useQuery } from "@tanstack/react-query";
import { GetActivities, GetActivitiesById } from "../apiServices/activities.service";

export const ACTIVITIES_QUERY_KEY = {
    GET: "activities",
    GET_BY_ID: "activitiesById"
}
export const useActivities = () => {
    return useQuery({
        queryKey: [ACTIVITIES_QUERY_KEY.GET],
        queryFn: GetActivities,
    })
}

export const useActivitiesById = (id: string) => {
    return useQuery({
        queryKey: [ACTIVITIES_QUERY_KEY.GET_BY_ID, id],
        queryFn: () => GetActivitiesById(id),
    })
}