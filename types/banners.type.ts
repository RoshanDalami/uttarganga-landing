export type TBanners = {
  id: number;
  imageUrl: string;
  linkUrl?: string | null | undefined;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TBannersResponse = {
  status: number;
  success: boolean;
  data: TBanners[];
  message: string;
};
