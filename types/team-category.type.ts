export type TTeamCategory = {
  id: number;
  title: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TTeamCategoryResponse = {
  data: TTeamCategory[];
  status: number;
  success: boolean;
  message: string;
};
