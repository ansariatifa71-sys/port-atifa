import Link from "next/link";
export default function About() {
  return (
    <section id="about" className="bg-[#393053] p-8 md:p-16">
      <p className="text-[#635985] text-md tracking-widest">01 / ABOUT ME</p>
      <h2 className="text-4xl md:text-6xl font-serif mt-5">
        A little about my world.
      </h2>
      <p className="text-white/60 max-w-2xl mt-6 leading-7">
        ### About Me Hi, I'm Atifa! I'm a first-year Artificial Intelligence and
        Data Science student with a growing passion for web design and
        technology. I enjoy exploring how creativity and technology come
        together to build meaningful digital experiences. I'm currently learning
        web development, improving my design skills, and exploring the world of
        AI and data science. I love experimenting with new ideas, creating
        modern website layouts, and turning concepts into interactive projects.
        As a beginner, I'm focused on learning, growing, and building projects
        that reflect my creativity and curiosity. My goal is to become a skilled
        developer who creates innovative, user-friendly, and impactful digital
        solutions. **Learning today. Building tomorrow. ✦**
      </p>
      <div className="mt-8 border-l-2 border-[#635985] pl-5">
        <h3 className="text-xl">AI & Data Science</h3>
        <p className="text-white/50">First Year · Learning · Exploring</p>
      </div>
    </section>
  );
}
