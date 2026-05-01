import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Fix My Website
        </h1>
        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
          Upload your ZIP, edit visually, and let AI automatically fix and improve
          your website. Ship faster, with confidence.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          {/* Placeholder – will be replaced with actual auth in Phase 2 */}
          <button
            disabled
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign In (Coming Soon)
          </button>
          <Link
            href="/"
            className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}