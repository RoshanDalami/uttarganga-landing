export type TGalleryImage = {
  id: number;
  imageCategoryId: number;
  imageUrl: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TGalleryUser = {
  id: number;
  title: string;
  isActive: boolean;
  galleryImages: TGalleryImage[];
};

export type TGalleryResponse = {
  status: number;
  data: TGalleryUser[];
  message: string;
  success: boolean;
};
