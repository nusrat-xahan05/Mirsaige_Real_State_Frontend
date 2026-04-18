import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-bg border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex flex-col items-center mb-5">
          <p className="text-gray-200 text-[12px] tracking-[0.3em] uppercase font-bold mb-3.5">
            Designed & Developed by
          </p>
          <div className="w-28 h-0.5 bg-highlighted rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-gray-400 font-mono text-sm">
          <h3 className="tracking-tight">Nusrat Jahan</h3>
          <span className="text-gray-600 font-light">|</span>
          <Link
            href="mailto:nusrat.xahan13@gmail.com"
            className="hover:text-highlighted transition-all duration-300 border-b border-transparent hover:border-highlighted/30"
          >
            nusrat.xahan13@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
