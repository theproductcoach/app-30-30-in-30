"use client";

import { useState, useEffect } from "react";

interface TechFilterProps {
  allTech: { tag: string; count: number }[];
  onFilterChange: (selectedTech: string[]) => void;
}

export default function TechFilter({
  allTech,
  onFilterChange,
}: TechFilterProps) {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTech = (tech: string) => {
    const newSelected = selectedTech.includes(tech)
      ? selectedTech.filter((t) => t !== tech)
      : [...selectedTech, tech];
    setSelectedTech(newSelected);
    onFilterChange(newSelected);
  };

  if (!isMounted) {
    return (
      <div className="flex flex-wrap gap-2 mb-8 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-20"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {allTech.map(({ tag, count }) => (
        <button
          key={tag}
          onClick={() => toggleTech(tag)}
          className={`group px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
            selectedTech.includes(tag)
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800"
          }`}
        >
          {tag}
          <span className="text-xs opacity-75 group-hover:opacity-100 transition-opacity">
            ({count})
          </span>
        </button>
      ))}
      {selectedTech.length > 0 && (
        <button
          onClick={() => {
            setSelectedTech([]);
            onFilterChange([]);
          }}
          className="px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
