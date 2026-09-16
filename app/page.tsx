"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBanners } from "@/service/apiHooks/banner.hook";
import Image from "next/image";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import NoticeFrontView from "./notice/components/NoticeFrontView";
import useCompany from "@/store/useCompany";
import ProjectFrontView from "./projects/components/ProjectFrontView";
import MissionSection from "@/components/MissionSection";
import { useEffect, useState } from "react";
export default function Home() {
  const { data: bannersData, isLoading } = useBanners();
  const { logoData, setBannerUrl } = useCompany();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!bannersData?.length || bannersData.length <= 1) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannersData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannersData]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-150 bg-slate-900"
      >
        <div className="absolute inset-0 overflow-hidden">
          {isLoading ? (
            <div className="w-full h-full bg-slate-900 animate-pulse">
              <div className="w-full h-full bg-slate-800" />
            </div>
          ) : (
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={currentImage}
                className="absolute inset-0"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  duration: 1.2,
                  ease: [0.65, 0, 0.35, 1],
                }}
              >
                <Image
                  src={imageurlgenerator(
                    bannersData?.[currentImage]?.imageUrl as string,
                  )}
                  alt={`Banner ${currentImage + 1}`}
                  fill
                  priority={currentImage === 0}
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              {logoData?.name || "Uttarganga Power Company Limited"}
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              {logoData?.slogan ||
                "Uttarganga Power Company Limited. is a leading hydroelectric power generation company committed to sustainable energy development."}
            </p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="bg-blue-500 text-primary-foreground px-6 py-3 rounded hover:bg-blue-600 transition flex items-center gap-2"
              >
                View Our Projects
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="bg-card text-card-foreground px-6 py-3 rounded hover:bg-accent transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      <MissionSection />
      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFrontView />
        </div>
      </motion.section>

      {/* Latest Updates Section */}
      <NoticeFrontView />
    </div>
  );
}
