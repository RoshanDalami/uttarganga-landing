export type TTeamMember = {
    id: number;
    memberName: string;
    positionId: number;
    roleId: number;
    teamCategoryId: number;
    contact: string;
    email: string;
    imageUrl: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    position: string;
    role: string;
    teamCategory: string;
}

export type TTeamMemberResponse = {
    data: TTeamMember[];
    status: number;
    success: boolean;
    message: string;
}