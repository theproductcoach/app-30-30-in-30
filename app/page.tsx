"use client";

import Image from "next/image";
import AppCard from "./components/AppCard";
import TechFilter from "./components/TechFilter";
import SearchInput from "./components/SearchInput";
import { apps } from "./data/apps";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  // Get technology counts and create array of {tag, count} objects
  const techCounts = apps.reduce((acc, app) => {
    app.tech.forEach((tech) => {
      acc[tech] = (acc[tech] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const topTech = Object.entries(techCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }));

  // Filter apps based on search query and selected technologies
  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech =
      selectedTech.length === 0 ||
      selectedTech.every((tech) => app.tech.includes(tech));
    return matchesSearch && matchesTech;
  });

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return (
    <main className="min-h-screen relative">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            30 in 30
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
            Building 30 apps in 30 days to explore new technologies and ideas
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <SearchInput onSearch={handleSearch} />
          <TechFilter allTech={topTech} onFilterChange={setSelectedTech} />
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Showing {filteredApps.length} of {apps.length} apps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </main>
  );
}
