const skillGroups = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Python", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    skills: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Vercel"],
  },
  {
    category: "Tools & Practices",
    icon: "🛠️",
    skills: ["Git", "Agile/Scrum", "Testing", "Code Review", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technologies I work with
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A selection of the tools and technologies I use to build products
            and bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ category, icon, skills }) => (
            <div
              key={category}
              className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-white font-semibold text-lg mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-slate-400 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
