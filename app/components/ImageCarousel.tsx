"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  appNumber: number;
  imageCount: number;
}

export default function ImageCarousel({
  appNumber,
  imageCount,
}: ImageCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [actualImageCount, setActualImageCount] = useState(0);

  const formatImageNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  useEffect(() => {
    // Check how many images actually exist
    const checkImages = async () => {
      let count = 0;
      for (let i = 1; i <= imageCount; i++) {
        try {
          const response = await fetch(
            `/screenshots/${formatImageNumber(appNumber)}${formatImageNumber(
              i
            )}.jpg`
          );
          if (response.ok) {
            count++;
          }
        } catch {
          // If we can't fetch the image, assume it doesn't exist
          break;
        }
      }
      setActualImageCount(count);
    };
    checkImages();
  }, [appNumber, imageCount]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage > 1 ? selectedImage - 1 : actualImageCount
      );
    } else {
      setSelectedImage(
        selectedImage < actualImageCount ? selectedImage + 1 : 1
      );
    }
  };

  if (actualImageCount === 0) return null;

  return (
    <div className="w-full">
      {/* Thumbnails */}
      <div className="flex justify-center">
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory max-w-full">
          {Array.from({ length: actualImageCount }, (_, i) => i + 1).map(
            (index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-44 h-44 md:w-[352px] md:h-[352px] rounded-lg overflow-hidden cursor-pointer snap-start hover:opacity-90 transition-opacity"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={`/screenshots/${formatImageNumber(
                    appNumber
                  )}${formatImageNumber(index)}.jpg`}
                  alt={`Screenshot ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="relative w-full h-[80vh]">
              <Image
                src={`/screenshots/${formatImageNumber(
                  appNumber
                )}${formatImageNumber(selectedImage)}.jpg`}
                alt={`Screenshot ${selectedImage}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
              {selectedImage} / {actualImageCount}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
