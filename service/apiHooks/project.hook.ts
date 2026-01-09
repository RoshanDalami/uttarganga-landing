import { useQuery } from "@tanstack/react-query";
import {
  GetProjects,
  GetProjectById,
} from "@/service/apiServices/project.service";

export const PROJECT_QUERY_KEY = {
  ALL_PROJECTS: "all-projects",
  PROJECT_BY_ID: "project-by-id",
};

export const useGetAllProjects = () => {
  return useQuery({
    queryKey: [PROJECT_QUERY_KEY.ALL_PROJECTS],
    queryFn: GetProjects,
  });
};

export const useGetProjectById = (id: string) => {
  return useQuery({
    queryKey: [PROJECT_QUERY_KEY.PROJECT_BY_ID, id],
    queryFn: () => GetProjectById(parseInt(id)),
  });
};
