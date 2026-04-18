import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-bg flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-[12rem] md:text-[16rem] font-black text-white/5 leading-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          404
        </h1>

        <div className="relative z-10">
          <span className="text-highlighted text-sm font-bold uppercase tracking-[0.5em] mb-4 block">
            Location Missing
          </span>

          <h2 className="text-4xl md:text-5xl uppercase font-display font-bold text-white mb-6">
            Property Not Found
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The architectural marvel or insight you`&apos;`re looking for has
            moved or no longer exists in our current collection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-highlighted hover:bg-white/5 rounded-full text-brand-bg hover:text-white border-2 border-highlighted transition-all duration-500 font-bold overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="transform group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                Return Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
