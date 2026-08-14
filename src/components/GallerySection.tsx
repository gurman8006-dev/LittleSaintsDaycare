import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/daycareData';
import { GalleryLightbox } from './GalleryLightbox';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'learning', label: 'Children Learning' },
    { id: 'creative', label: 'Creative Activities' },
    { id: 'play', label: 'Indoor & Classroom' },
    { id: 'outdoor', label: 'Outdoor Play' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F4C81] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider">
            Photo Gallery
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Moments of Joy, Wonder &amp; Friendship
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Take a look inside Little Saints Daycare &amp; OSC. See how our caring educators and bright learning spaces support your child’s daily growth.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0F4C81] text-white shadow-sm scale-102'
                    : 'bg-[#FAF9F6] text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              id={`gallery-item-${img.id}`}
              onClick={() => {
                const originalIndex = GALLERY_IMAGES.findIndex((item) => item.id === img.id);
                setLightboxIndex(originalIndex !== -1 ? originalIndex : idx);
              }}
              className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 shadow-xs hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-black/40 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    {img.categoryLabel}
                  </span>
                  <h4 className="text-base font-bold leading-tight">{img.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Want to see our bright classrooms and play areas in person?
          </p>
          <a
            id="gallery-schedule-tour-link"
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C81] hover:text-[#0c3d68] mt-2 underline"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Visit Little Saints Daycare &amp; OSC in Edmonton</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(index) => setLightboxIndex(index)}
      />
    </section>
  );
};
