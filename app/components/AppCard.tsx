"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface App {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  slug: string;
}

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const CardContent = () => (
    <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:brightness-110 hover:shadow-2xl hover:-translate-y-1 border border-white/20 dark:border-gray-700/30">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 dark:from-gray-800/20 dark:to-gray-900/20" />
      <div className="relative p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {app.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {app.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {app.tech?.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-white/20 dark:bg-gray-800/40 text-gray-800 dark:text-gray-200 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  // Return a placeholder during SSR
  if (!isMounted) {
    return (
      <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden h-full animate-pulse border border-white/20 dark:border-gray-700/30">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 dark:from-gray-800/20 dark:to-gray-900/20" />
        <div className="relative p-6">
          <div className="h-6 bg-white/20 dark:bg-gray-800/40 rounded-lg w-3/4 mb-3"></div>
          <div className="h-4 bg-white/20 dark:bg-gray-800/40 rounded-lg w-full mb-4"></div>
          <div className="flex flex-wrap gap-2">
            <div className="h-6 bg-white/20 dark:bg-gray-800/40 rounded-full w-16"></div>
            <div className="h-6 bg-white/20 dark:bg-gray-800/40 rounded-full w-20"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/apps/${app.slug}`}
      className="block h-full transition-transform duration-300 hover:scale-[1.02]"
    >
      <CardContent />
    </Link>
  );
}
