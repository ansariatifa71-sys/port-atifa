import Link from "next/link";
export default function Hero() {
  return (
     <section className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-16 py-20
     ">
        <div>
          <p className="text-[#635985] tracking-[5px] text-md">AI & DATA SCIENCE STUDENT</p>
          <h1 className="text-7xl md:text-9xl font-black mt-5 mask-radial-from-neutral-500">
            ATIFA
          </h1>
          <h2 className="text-2xl text-[#635985] mt-4">Creative Mind. Technical Soul.</h2>
          <p className="text-white/60 mt-5 leading-7">
            Exploring technology, designing experiences,
            and turning curious ideas into meaningful projects.
          </p>
          <a href="#work" className="inline-block mt-8 bg-[#635985] px-7 py-3 rounded-full hover:bg-[#443C68] transition">
            Explore My Work ↗
          </a>
        </div>

        <div className="relative bg-[#393053] p-4 rounded-[40px] border border-[#635985]/40">
          <img src="/me(2).png" alt="Atifa" className="w-full h-[400px] object-cover rounded-[30px]" />
          <p className="absolute bottom-8 left-8 bg-[#18122B]/90 p-4 rounded-xl text-[#635985]">
            LEARN · CREATE · GROW ✦
          </p>
        </div>
      </section>
  );
}
