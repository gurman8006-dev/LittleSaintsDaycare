import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../types';

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onSelectIndex,
}) => {
  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      onSelectIndex((currentIndex + 1) % images.length);
    }
  }, [currentIndex, images.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      onSelectIndex((currentIndex - 1 + images.length) % images.length);
    }
  }, [currentIndex, images.length, onSelectIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, handleNext, handlePrev, onClose]);

  if (currentIndex === null || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between text-white mb-3 px-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              {currentImage.categoryLabel}
            </span>
            <span className="text-xs text-slate-300">
              {currentIndex + 1} of {images.length}
            </span>
          </div>

          <button
            id="close-lightbox-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center Image with Navigation Buttons */}
        <div className="relative w-full flex items-center justify-center">
          <button
            id="lightbox-prev-btn"
            onClick={handlePrev}
            className="absolute left-2 sm:-left-6 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition backdrop-blur-xs focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="rounded-2xl overflow-hidden max-h-[70vh] bg-black shadow-2xl border border-white/10 flex items-center justify-center">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[70vh] w-auto object-contain rounded-2xl animate-in zoom-in-95 duration-200"
            />
          </div>

          <button
            id="lightbox-next-btn"
            onClick={handleNext}
            className="absolute right-2 sm:-right-6 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition backdrop-blur-xs focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="w-full text-center mt-4 px-4">
          <h4 className="text-lg font-bold text-white">{currentImage.title}</h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-1">
            {currentImage.description}
          </p>
        </div>
      </div>
    </div>
  );
};
