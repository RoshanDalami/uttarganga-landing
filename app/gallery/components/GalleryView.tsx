"use client";

import { useState } from "react";
import AnimationWrapper from "@/components/reusable/AnimationWrapper";
import { useGetGalleryUserView } from "@/service/apiHooks/gallery.hook";
import Image from "next/image";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import ImageGalleryModal from "@/components/reusable/ImageGalleryModal";
import { TGalleryImage } from "@/types/gallery.type";
import { motion } from "framer-motion";
import EmptyData from "@/components/reusable/EmptyData";
function GalleryView() {
  const { data: galleries, isLoading } = useGetGalleryUserView();

  const [showGallery, setShowGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [images, setImages] = useState<TGalleryImage[]>([]);

  const openGallery = (galleryImages: TGalleryImage[]) => {
    setImages(galleryImages);
    setSelectedIndex(0);
    setShowGallery(true);
  };

  return (
    <AnimationWrapper>
      <div className="p-6 space-y-6 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-2xl font-semibold">Gallery</h1>

        {/* Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-2 space-y-2">
                <div className="h-48 bg-gray-200 animate-pulse rounded-md" />
                <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
              </div>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        {galleries?.length === 0 ? <EmptyData title="No galleries found" description="There are no galleries to display at the moment." /> : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {galleries?.map((gallery, index) => {
            const cover = gallery.galleryImages?.[0]?.imageUrl;

            if (!cover) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="border rounded-lg overflow-hidden bg-white shadow-sm"
              >
                {/* Image */}
                <div
                  className="relative h-48 cursor-pointer"
                  onClick={() => openGallery(gallery.galleryImages)}
                >
                  <Image
                    src={imageurlgenerator(cover)}
                    alt={gallery.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <div className="p-3">
                  <h2 className="text-sm font-medium truncate">
                    {gallery.title}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {gallery.galleryImages.length} images
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>}

        {/* Modal */}
        <ImageGalleryModal
          isOpen={showGallery}
          onClose={() => setShowGallery(false)}
          images={images}
          initialIndex={selectedIndex}
          renderImage={(image) => (
            <Image
              src={imageurlgenerator(image.imageUrl)}
              alt={image.imageUrl}
              fill
              className="object-contain"
            />
          )}
        />
      </div>
    </AnimationWrapper>
  );
}

export default GalleryView;
