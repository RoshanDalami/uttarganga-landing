import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TLogo } from "@/types/logo.type";

interface CompanyState {
    logoData: TLogo | null;
    setLogoData: (data: TLogo) => void;
    bannerurl: string;
    setBannerUrl: (url: string) => void;
}

const useCompany = create<CompanyState>()(
    persist(
        (set) => ({
            logoData: null,
            setLogoData: (data) => set({ logoData: data }),
            bannerurl: "",
            setBannerUrl: (url) => set({ bannerurl: url }),
        }),
        {
            name: "company-storage",
        }
    )
);

export default useCompany;
