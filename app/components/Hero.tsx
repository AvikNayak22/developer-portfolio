"use client";

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 to-blue-600/10 blur-3xl"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          <span className="text-white">Avik Nayak</span>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Software Engineer",
              2000,
              "Next.js Developer",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-emerald-500 block mt-2"
            repeat={Infinity}
          />
        </h1>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          I specialize in building responsive and efficient web applications
          using React and Next.js. With a focus on clean code and user-centric
          design, I create seamless digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors group"
          >
            View Projects
            <MdArrowForward className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
