"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I was in awe at how interesting this museum is. I brought my four-year old son one week day morning because he's interested in airplanes. My son absolutely LOVED it!",
      source: "TripAdvisor",
    },
    {
      text: "This is truly hidden gem for anyone with an interest in aviation, but still very interesting for all comers.",
      source: "TripAdvisor",
    },
    {
      text: "Interesting place, fun for the children big and small",
      source: "Google",
    },
    {
      text: "EXTREMELY knowledgeable staff.",
      source: "Google",
    },
    {
      text: "Really cool aircraft with really knowledgeable people working there.",
      source: "Google",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return testimonials.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === testimonials.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-red-700 text-center">
        Testimonials
      </h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-gray-100 p-8 rounded-lg shadow-sm min-h-[200px] flex flex-col justify-between">
          <p className="text-gray-600 italic text-lg mb-6">
            "{testimonials[currentIndex].text}"
          </p>
          <p className="text-blue-700 font-semibold text-right">
            - {testimonials[currentIndex].source}
          </p>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-700" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
