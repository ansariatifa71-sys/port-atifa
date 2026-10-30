import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b-2 border-white  text-white rounded-lg  bg-[#18122B]">
      <a href="#" className="text-2xl font-black text-white">
        Atifa
      </a>
      <div className="flex gap-6 text-md">
        <a
          href="#about"
          className="hover:text-blue-300 hover:border-1 hover:border-amber-50 hover:rounded-lg hover:px-4 transition:duration-300s"
        >
          About
        </a>

        <a
          href="#skills"
          className="hover:text-blue-300   hover:border-1 hover:border-amber-50 hover:rounded-lg hover:px-4"
        >
          Skills
        </a>

        <a
          href="#work"
          className="hover:text-blue-300  hover:border-1 hover:border-amber-50 hover:rounded-lg hover:px-4"
        >
          Work
        </a>

        <a
          href="#contact"
          className="hover:text-blue-300 hover:border-1 hover:border-amber-50 hover:rounded-lg hover:px-4"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
