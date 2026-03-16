const projects = [
  {
    title: "Personal Website",
    description:
      "My personal portfolio site built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and a responsive layout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/davemap/david.mapstone.me",
      live: "https://david.mapstone.me",
    },
    featured: true,
  },
  {
    title: "Full-Stack Web App",
    description:
      "A full-stack application with a React frontend and Node.js backend. Includes user authentication, real-time updates, and a RESTful API.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    links: {
      github: "https://github.com/davemap",
    },
    featured: false,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Automated cloud infrastructure deployment using AWS CDK and GitHub Actions. Includes auto-scaling, monitoring, and CI/CD pipelines.",
    tags: ["AWS", "Docker", "GitHub Actions", "IaC"],
    links: {
      github: "https://github.com/davemap",
    },
    featured: false,
  },
];

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve worked on. Check out my GitHub for
            more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`flex flex-col p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                project.featured
                  ? "bg-blue-600/10 border-blue-500/30 hover:border-blue-400/50"
                  : "bg-slate-800/50 border-slate-700/50 hover:border-slate-600"
              }`}
            >
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 mb-4">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Featured
                </span>
              )}

              <h3 className="text-white font-semibold text-xl mb-3">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  <GithubIcon />
                  GitHub
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    <ExternalLinkIcon />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/davemap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-200 font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <GithubIcon />
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
