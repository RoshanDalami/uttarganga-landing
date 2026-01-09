export type TLogo = {
  id: number;
  url: string;
  name: string;
  slogan: string;
};

export type TLogoResponse = {
  data: TLogo;
  status: number;
  message: string;
  success: boolean;
};
