import { useQuery } from "@tanstack/react-query";
import { GetTeamMember } from "../apiServices/team-member.service";

export const TeamMemberQueryKey = {
    GET: "team-member"
}
export const useTeamMember = () => {
    return useQuery({
        queryKey: [TeamMemberQueryKey.GET],
        queryFn: GetTeamMember,
    })
}