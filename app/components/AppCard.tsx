"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 24, scale: 1 }}
      whileHover={{
        scale: 1.04,
        y: 12,
        rotateX: 20,
        boxShadow: "0 12px 32px 0 #00fff7, 0 2px 16px 0 #000a"
      }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="relative h-full flex items-end justify-center z-10"
      style={{ perspective: "1200px" }}
    >
      {/* 3D side/depth effect */}
      <div className="absolute w-64 h-96 left-0 top-2 z-0"
        style={{
          transform: "translateZ(-16px) skewX(-12deg)",
          background: "linear-gradient(120deg, #0ff2 0%, #0a0a1a 100%)",
          opacity: 0.5,
          filter: "blur(1px)"
        }}
      />
      {/* Card base with tight border */}
      <div className="relative w-64 h-96 bg-[#0a0a1a] border-2 border-cyan-400 overflow-hidden flex flex-col items-center justify-center px-6 py-8 text-center z-10"
        style={{
          boxShadow: "0 12px 32px 0 #00fff733, 0 2px 16px 0 #000a",
          transform: "rotateX(18deg)"
        }}
      >
        <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight leading-tight">
          {app.title}
        </h3>
        <p className="text-cyan-100 text-base mb-4 leading-snug line-clamp-3">
          {app.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-auto mb-2">
          {app.tech?.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-cyan-900/60 text-cyan-200 border border-cyan-400/60"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Floor reflection */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-5/6 h-12 pointer-events-none z-20"
          style={{
            background: "linear-gradient(180deg, rgba(0,255,247,0.13) 0%, rgba(0,255,247,0.04) 60%, transparent 100%)",
            filter: "blur(3px)",
            opacity: 0.6
          }}
        />
      </div>
      {/* Soft shadow below card */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-40 h-8 bg-black/60 blur-2xl opacity-40 z-0" />
    </motion.div>
  );

  // Return a placeholder during SSR
  if (!isMounted) {
    return (
      <div className="relative h-full flex items-end justify-center z-10">
        <div className="relative w-64 h-96 bg-[#0a0a1a] border-2 border-cyan-400 overflow-hidden flex flex-col items-center justify-center px-6 py-8 text-center animate-pulse z-10"
          style={{
            boxShadow: "0 12px 32px 0 #00fff733, 0 2px 16px 0 #000a",
            transform: "rotateX(18deg)"
          }}
        >
          <div className="h-6 bg-cyan-900/40 rounded w-3/4 mx-auto mb-3"></div>
          <div className="h-4 bg-cyan-900/40 rounded w-full mb-4"></div>
          <div className="flex flex-wrap gap-2 justify-center mt-auto mb-2">
            <div className="h-6 bg-cyan-900/40 rounded-full w-16"></div>
            <div className="h-6 bg-cyan-900/40 rounded-full w-20"></div>
          </div>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-5/6 h-12 pointer-events-none z-20"
            style={{
              background: "linear-gradient(180deg, rgba(0,255,247,0.13) 0%, rgba(0,255,247,0.04) 60%, transparent 100%)",
              filter: "blur(3px)",
              opacity: 0.6
            }}
          />
        </div>
        {/* 3D side/depth effect */}
        <div className="absolute w-64 h-96 left-0 top-2 z-0"
          style={{
            transform: "translateZ(-16px) skewX(-12deg)",
            background: "linear-gradient(120deg, #0ff2 0%, #0a0a1a 100%)",
            opacity: 0.5,
            filter: "blur(1px)"
          }}
        />
        {/* Soft shadow below card */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-40 h-8 bg-black/60 blur-2xl opacity-40 z-0" />
      </div>
    );
  }

  return (
    <Link
      href={`/apps/${app.slug}`}
      className="block h-full"
    >
      <CardContent />
    </Link>
  );
}
