const skills = [
  {
    title: "Python",
    description:
      "Learning programming fundamentals and building logic through Python.",
    icon: "🐍",
    category: "Programming",
  },
  {
    title: "SQL",
    description: "Exploring databases, queries, and data management.",
    icon: "🗄️",
    category: "Data",
  },
  {
    title: "Data Analysis",
    description: "Understanding data and discovering meaningful insights.",
    icon: "📊",
    category: "Data Science",
  },
  {
    title: "Machine Learning",
    description: "Exploring how AI models learn patterns from data.",
    icon: "🤖",
    category: "AI & Data Science",
  },
  {
    title: "HTML & CSS",
    description: "Creating structured, attractive, and responsive web pages.",
    icon: "🌐",
    category: "Web Development",
  },
  {
    title: "Tailwind CSS",
    description: "Designing modern interfaces using utility-first CSS.",
    icon: "🎨",
    category: "Web Development",
  },
  {
    title: "JavaScript",
    description: "Learning to make websites interactive and dynamic.",
    icon: "⚡",
    category: "Web Development",
  },
  {
    title: "Next.js",
    description: "Exploring modern React frameworks and website development.",
    icon: "▲",
    category: "Web Development",
  },
  {
    title: "Figma",
    description: "Creating layouts, wireframes, and user-friendly designs.",
    icon: "✏️",
    category: "UI/UX Design",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#18122B] px-6 py-20 text-white md:px-12 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-[#635985]/20 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-[#443C68]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#A99BCF]">
            What I Know
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-[#A99BCF]">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-300">
            I'm continuously learning and improving my technical and creative
            skills to build meaningful digital experiences.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group rounded-2xl border border-[#635985]/40 bg-[#393053]/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#A99BCF] hover:bg-[#443C68]/70 hover:shadow-xl hover:shadow-[#635985]/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#635985]/30 text-3xl transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              {/* Category */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#A99BCF]">
                {skill.category}
              </p>

              {/* Skill Title */}
              <h3 className="mb-3 text-xl font-bold text-white">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-14 text-center">
          <p className="text-gray-300">
            Always learning. Always exploring. Always growing.
          </p>

          <p className="mt-2 font-semibold text-[#A99BCF]">
            Learning today. Building tomorrow. ✦
          </p>
        </div>
      </div>
    </section>
  );
}
