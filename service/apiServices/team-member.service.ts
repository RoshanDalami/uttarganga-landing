import { apiUrl } from "../apiUrl";
import { mainApiWrapper } from "../apiHelper";
import { TTeamMemberResponse } from "@/types/team-member.type";


export const GetTeamMember = async () => {
    const response: TTeamMemberResponse = await mainApiWrapper(apiUrl.teamMember.get.method, apiUrl.teamMember.get.url)
    return response?.data
}