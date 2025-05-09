import Link from "next/link";
import { apps } from "@/app/data/apps";
import { notFound } from "next/navigation";
import ImageCarousel from "../../components/ImageCarousel";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AppPage({ params }: PageProps) {
  const resolvedParams = await params;
  const app = apps.find((app) => app.slug === resolvedParams.slug);

  if (!app) {
    notFound();
  }

  // Extract app number from the title (assuming format "XX - Title")
  const appNumber = parseInt(app.title.split(" - ")[0]);
  const imageCount = 3; // Assuming 3 images per app, adjust if needed

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
          <h1 className="text-4xl font-bold mb-4 text-center">
            {app.title.replace(/^\d{2}\s*-\s*/, "")}
          </h1>

          {/* Day Tag */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center px-4 py-1.5 text-base font-medium bg-white/10 dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
              🗓️ Built on Day {appNumber}
            </span>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
            {app.description}
          </p>

          {/* Live Demo Button */}
          {app.link && (
            <div className="text-center mb-8">
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
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

          {/* Image Carousel */}
          <div className="mb-8">
            <ImageCarousel appNumber={appNumber} imageCount={imageCount} />
          </div>

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
            <div className="flex flex-wrap gap-2 items-center">
              {app.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-white/20 dark:bg-gray-800/40 text-gray-800 dark:text-gray-200 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
                >
                  {tech}
                </span>
              ))}
              <a
                href={`https://github.com/theproductcoach/app-${appNumber
                  .toString()
                  .padStart(2, "0")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm font-medium bg-white/10 dark:bg-gray-800/30 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/40 transition-colors duration-200 italic"
              >
                📂 View Code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
