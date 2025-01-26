import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/AvikNayak22", icon: FaGithub },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/avik-nayak",
    icon: FaLinkedin,
  },
  { name: "Email", url: "mailto:jnayakavik19@gmail.com", icon: MdEmail },
];
export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Avik Nayak</h3>
            <p className="text-gray-400">
              Developer based in West Bengal, India
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Avik Nayak. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
