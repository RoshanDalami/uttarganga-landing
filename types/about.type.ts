export type TAbout = {
    id: number;
    content: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export type TAboutResponse = {
    data: TAbout[];
    message: string;
    status: number;
    success: boolean;
}