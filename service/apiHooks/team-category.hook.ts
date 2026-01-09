import { useQuery } from "@tanstack/react-query";
import { GetTeamCategory } from "../apiServices/team-category.service";

export const TeamCategoryQueryKey = {
  GET: "team-category"
};

export const useTeamCategory = () => {
  return useQuery({
    queryKey: [TeamCategoryQueryKey.GET],
    queryFn: GetTeamCategory,
  });
};
