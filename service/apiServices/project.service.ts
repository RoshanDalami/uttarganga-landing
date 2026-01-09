import { mainApiWrapper } from "../apiHelper";
import { apiUrl } from "../apiUrl";
import { TProjectGetByIdResponse, TProjectGetResponse } from '@/types/project.type'


export const GetProjects = async () => {
    const response: TProjectGetResponse = await mainApiWrapper(
        apiUrl.project.get.method,
        apiUrl.project.get.url
    )
    return response?.data
}

export const GetProjectById = async (id: number) => {
    const response: TProjectGetByIdResponse = await mainApiWrapper(
        apiUrl.project.getById.method,
        apiUrl.project.getById.url + `/${id}`,
    )
    return response?.data
}