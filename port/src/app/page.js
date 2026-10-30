import About from "@/componenet/about";
import Hero from "@/componenet/hero";
import Navbar from "@/componenet/nevbar";
import Skills from "@/componenet/skills";

export default function Home() {
  return (
    <main className="portfolio-page text-white min-h-screen p-3 md:p-6 relative overflow-hidden bg-[#18122B]">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/video-1.mp4"
        type="video/mp4"
        aria-hidden="true"
        className="portfolio-video fixed inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="portfolio-overlay fixed inset-0 -z-10" />

      <div className="relative z-10">
        <div className="reveal reveal-1">
          <Navbar />
        </div>

        <div className="reveal reveal-2">
          <Hero />
        </div>

        <div className="reveal reveal-3">
          <About />
        </div>

        <div className="reveal reveal-4">
          <Skills />
        </div>

        <footer
          id="contact"
          className="contact-footer text-center p-12 md:p-20"
        >
          <p className="text-[#a99bd1] tracking-widest text-xs">
            04 / LET&apos;S CONNECT
          </p>

          <h2 className="text-4xl md:text-6xl font-serif mt-5">
            Let&apos;s create something.
          </h2>

          <a
            href="mailto:your@email.com"
            className="contact-button inline-block mt-8 border border-[#a99bd1] px-7 py-3 rounded-full hover:bg-[#635985] transition"
          >
            Contact Me ↗
          </a>

          <p className="text-white/50 text-sm mt-12">
            Designed &amp; Built by Atifa ♡
          </p>
        </footer>
      </div>

      <style>{`
        .portfolio-page {
          isolation: isolate;
        }

        .portfolio-video {
          animation: videoZoom 24s ease-in-out infinite alternate;
        }

        .portfolio-overlay {
          background:
            linear-gradient(180deg, rgba(24, 18, 43, 0.48), rgba(24, 18, 43, 0.88)),
            radial-gradient(circle at 75% 25%, rgba(99, 89, 133, 0.28), transparent 42%);
          pointer-events: none;
        }

        .reveal {
          opacity: 0;
          animation: fadeUp 0.85s cubic-bezier(0.22, 0.7, 0.2, 1) forwards;
        }

        .reveal-1 { animation-delay: 0.1s; }
        .reveal-2 { animation-delay: 0.3s; }
        .reveal-3 { animation-delay: 0.5s; }
        .reveal-4 { animation-delay: 0.7s; }

        .contact-footer {
          opacity: 0;
          animation: fadeUp 0.85s cubic-bezier(0.22, 0.7, 0.2, 1) 0.9s forwards;
        }

        .contact-button {
          transition: transform 0.25s ease, background-color 0.25s ease;
        }

        .contact-button:hover {
          transform: translateY(-3px);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes videoZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-video,
          .reveal,
          .contact-footer {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}
