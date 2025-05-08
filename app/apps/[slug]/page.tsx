import Link from "next/link";
import Image from "next/image";
import { apps } from "@/app/data/apps";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function AppPage({ params }: PageProps) {
  const app = apps.find((app) => app.slug === params.slug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen relative">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{app.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {app.description}
          </p>

          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {app.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/20 dark:border-gray-700/30">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {app.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-white/20 dark:bg-gray-800/40 text-gray-800 dark:text-gray-200 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {app.link && (
            <div className="text-center">
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View Live Demo
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
