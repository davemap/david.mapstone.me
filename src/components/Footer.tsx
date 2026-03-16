export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>© {year} David Mapstone. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Next.js
          </a>
          &amp;
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}
