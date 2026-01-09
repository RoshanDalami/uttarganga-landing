"use client";
import PageBanner from "@/components/reusable/PageBanner";
import GalleryView from "./components/GalleryView";
function GalleryIndex() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="View images of projects and events"
      />
      <GalleryView />
    </>
  );
}

export default GalleryIndex;
