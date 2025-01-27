import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-emerald-400 tracking-tight">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <div className="relative group w-[400px] h-[400px]">
              <Image
                src="/profile-photo.jpg"
                alt="profile-photo"
                width={400}
                height={400}
                className="rounded-full w-[400px] h-[400px] mx-auto border-4 border-emerald-400 shadow-2xl relative z-10 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              I&apos;m a software engineer who loves building websites and apps
              that work great and are easy to use. I write clean code
              that&apos;s easy to maintain and focus on creating solutions that
              help both users and businesses. I enjoy solving problems and
              turning ideas into amazing digital experiences.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Beyond development, I am deeply committed to staying current with
              industry trends and best practices. I enjoy working on fun
              projects, participating in hackathons, and experimenting with
              emerging technologies in my spare time. My goal is to make
              meaningful contributions to the tech community.
            </p>
            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400 tracking-wide">
                Tech I Love Working With
              </h3>
              <div className="flex flex-wrap gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center bg-gray-700/50 backdrop-blur-sm px-6 py-3 rounded-xl transition-all hover:bg-gray-600/50 hover:scale-105 cursor-pointer"
                  >
                    <skill.icon className={`text-2xl mr-3 ${skill.color}`} />
                    <span className="text-base text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
