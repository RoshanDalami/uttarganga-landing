export type TNoticeMedia = {
  id: number;
  noticeId: number;
  mediaUrl: string;
  mediaType: "image" | "pdf";
  createdAt: string;
  updatedAt: string;
};

export type TNotice = {
  id: number;
  title: string;
  content: string;
  publishDate: string;
  time: string;
  isActive: true;
  isDeleted: false;
  createdAt: string;
  updatedAt: string;
  noticeMedias: TNoticeMedia[];
};

export type TNoticesResponse = {
  data: TNotice[];
  message: string;
  status: number;
  success: boolean;
};

export type TNoticeResponse = {
  data: TNotice;
  message: string;
  status: number;
  success: boolean;
};

export type TCreateNoticeResponse = {
  data: null;
  message: string;
  status: number;
  success: boolean;
};
