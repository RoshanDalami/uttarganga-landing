import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryModalProps<T> {
  isOpen: boolean;
  onClose: () => void;
  images: T[];
  initialIndex?: number;
  renderImage: (image: T, index: number) => React.ReactNode;
}

const ImageGalleryModal = <T,>({ 
  isOpen, 
  onClose, 
  images, 
  initialIndex = 0,
  renderImage 
}: ImageGalleryModalProps<T>) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Update selected index when initialIndex changes
  useEffect(() => {
    setSelectedIndex(initialIndex);
  }, [initialIndex]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white z-10 bg-black/50 rounded-full p-1.5 sm:p-2 hover:bg-black/70 transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-4 text-white z-10 bg-black/50 rounded-full p-1.5 sm:p-2 hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 text-white z-10 bg-black/50 rounded-full p-1.5 sm:p-2 hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl">
              {renderImage(images[selectedIndex], selectedIndex)}
            </div>
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageGalleryModal;