const highlights = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "30+" },
  { label: "Technologies", value: "20+" },
  { label: "Coffees Consumed", value: "∞" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building things for the web
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m David Mapstone, a software engineer based in the UK
                with a strong background in full-stack web development. I enjoy
                turning complex problems into simple, beautiful, and intuitive
                solutions.
              </p>
              <p>
                When I&apos;m not writing code, I&apos;m exploring new
                technologies, contributing to open-source projects, and staying
                up to date with the latest trends in software engineering.
              </p>
              <p>
                I value clean code, thoughtful architecture, and great developer
                experience. I believe the best software is built collaboratively
                and iteratively.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Let&apos;s work together
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map(({ label, value }) => (
              <div
                key={label}
                className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {value}
                </div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
