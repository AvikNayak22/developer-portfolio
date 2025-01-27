"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "motion/react";

const projects = [
  {
    title: "Syntaxium",
    description:
      "A web-based code editor and execution platform that allows users to write, run, and share code snippets in multiple languages.",
    image: "/project-2.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Convex", "Zustand"],
    liveUrl: "https://syntaxium.vercel.app",
    githubUrl: "https://github.com/AvikNayak22/syntaxium",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides real-time weather information using a third-party API.",
    image: "/project-2.png",
    technologies: ["React", "OpenWeather API", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Manager",
    description:
      "A simple task management application with CRUD functionality.",
    image: "/project-2.png",
    technologies: ["React", "LocalStorage", "CSS-in-JS"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-emerald-500">
          My Projects
        </h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-400 ease-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.3,
              }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                  </div>
                </div>
                <div
                  className={`${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  } space-y-6`}
                >
                  <h3 className="text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500 ease-in-out">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-500/80 uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500 ease-in-out"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4">
                    <Link
                      href={project.liveUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-400 transition-colors duration-500 ease-in-out"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                      <GoArrowUpRight className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-500 ease-in-out"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                      <FaGithub className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
