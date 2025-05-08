"use client";

import TechFilter from "./components/TechFilter";
import SearchInput from "./components/SearchInput";
import { apps } from "./data/apps";
import { useState, useCallback } from "react";
import Link from "next/link";

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
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-4xl">
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

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 animate-pulse" />

          {/* Timeline Cards */}
          <div className="space-y-8 md:space-y-12">
            {filteredApps.map((app, index) => (
              <div
                key={app.slug}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } md:justify-start`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20" />

                {/* Card */}
                <div
                  className={`w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-4 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <Link
                    href={`/apps/${app.slug}`}
                    className="block transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20 dark:border-gray-700/30 hover:shadow-2xl hover:shadow-blue-500/10">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 dark:from-gray-800/20 dark:to-gray-900/20" />
                      <div className="relative p-4 md:p-6">
                        <div className="flex items-center gap-3 mb-2 md:mb-3">
                          <span className="text-lg md:text-xl font-semibold text-blue-500 dark:text-blue-400">
                            #{index + 1}
                          </span>
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                            {app.title.replace(/^\d{2}\s*-\s*/, "")}
                          </h3>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                          {app.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                          {app.tech?.map((item, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-0.5 md:py-1 text-xs font-medium bg-white/20 dark:bg-gray-800/40 text-gray-800 dark:text-gray-200 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 text-sm font-medium text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                            View App
                            <svg
                              className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2"
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
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
